class DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :update, :edit, :destroy]

  def index
    @departments = Department.all
    render component: "Departments", props: {departments: @departments}
  end

  def show
    render component: "Department"
  end

  def edit
    render component: "DepartmentEdit"

  end

  def new
    render component: "DepartmentNew"

  end

  private

  def set_department
    @department = Department.find(params[:id])
  end

end
