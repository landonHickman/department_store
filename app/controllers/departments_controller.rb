class DepartmentsController < ApplicationController
  before_action :set_department, only: [:show, :update, :edit, :destroy]

  # all departments
  def index
    @departments = Department.all
    render component: "Departments", props: {departments: @departments}
  end

  # one department
  def show
    render component: "Department", props: {department: @department}
  end

  #edit
  def edit
    render component: "DepartmentEdit", props: {department: @department}
  end

  #used to update from edit page use .update then redirect
  def update
    if @department.update(department_params)
      redirect_to departments_path
    else
    end
  end

  #new page
  def new
    render component: "DepartmentNew"
  end

  #create use the .save
  def create
    @department = Department.new(department_params)
    if(@department.save)
      redirect_to departments_path
    else

    end
  end

  #destroy then redirect
  def destroy
    @department.destroy
    redirect_to departments_path
  end

  private

  #used in 4 functions so they are in the before action
  def set_department
    @department = Department.find(params[:id])
  end

  #used in update and create to scrub and make sure we only get name
  def department_params
    params.require(:department).permit(:name)
  end

end
