class ReviewsController < ApplicationController
  before_action :set_item
  before_action :set_review, only: [:edit, :show, :update, :destroy]

  def index
    @reviews = @item.reviews
    render component: "Reviews", props: {item: @item, reviews: @reviews}
  end
  
  def show
    render component: "Review", props: {item: @item, review: @review}
  end
  
  def new
    render component: "ReviewNew"
  end
  
  def edit
    render component: "ReviewEdit"
  end

  private

  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_review 
    @review = @item.reviews.find(params[:id])
  end
end
