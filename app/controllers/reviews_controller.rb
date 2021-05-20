class ReviewsController < ApplicationController
  before_action :set_item
  before_action :set_review, only: [:edit, :show, :update, :destroy]

  def index
    @reviews = @item.reviews
    # @department = Department.find(params[:id])
    render component: "Reviews", props: {item: @item, reviews: @reviews, department: @department}
  end
  
  def show
    render component: "Review", props: {item: @item, review: @review}
  end
  
  def new
    render component: "ReviewNew", props: {item: @item, review: @review}
  end

  def create
    review = @item.reviews.new(review_params)
    if (review.save)
      redirect_to item_reviews_path(@item.id)
    else
    end
  end
  
  def edit
    render component: "ReviewEdit"
  end

  private
  def review_params
    params.require(:review).permit(:body)
  end

  def set_item
    @item = Item.find(params[:item_id])
  end

  def set_review 
    @review = @item.reviews.find(params[:id])
  end
end
