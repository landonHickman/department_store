class ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:show, :destroy, :update, :edit]
  def index
    render component: "Items", props: {department: @department, items: @department.items}
  end

  def show
    render component: "Item", props: {department: @department, item: @department.items.find(params[:id])}
  end

  def new
    @item = @department.items.new
    render component: "ItemNew", props: {department: @department, item: @item}
  end

  def create
    @item = @department.items.new(item_params)
    if @item.save
      redirect_to department_items_path
    else

    end
  end

  def edit
    render component: "ItemEdit", props: {department: @department, item: @item}
  end

  def update
    if @item.update(item_params)
      redirect_to department_items_path
    else

    end
  end
  
  def destroy
    @item.destroy
    redirect_to department_items_path
  end

  private
  
  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = @department.items.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :price)
  end
end
