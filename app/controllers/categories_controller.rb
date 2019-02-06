class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: {categories: categories}
  end

  # This one is not needed ATM
  def show
    category = Category.find(params[:id])
    render json: category
  end
end
