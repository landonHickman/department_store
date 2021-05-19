class DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :update, :edit, :destroy]

  def index
    @departments = Department.all
    render component: "Departments", props: {departments: @departments}
  end

  def show
    render component: "Department", props: {department: @department}
  end

  def edit
    render component: "DepartmentEdit", props: {department: @department}

  end

  def new
    render component: "DepartmentNew", props: {department: @department}

  end

  def destroy
    @department.destroy
    redirect_to departments_path
  end

  private

  def set_department
    @department = Department.find(params[:id])
  end

end
