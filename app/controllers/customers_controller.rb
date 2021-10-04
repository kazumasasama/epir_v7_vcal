class CustomersController < ApplicationController
  def index
    customers = Customer.all
    render 'index', formats: 'json', handlers: 'jbuilder'
  end

  def show
    @customer = Customer.find(params[:id])
    render 'show', formats: 'json', handlers: 'jbuilder'
  end

  def create
    @customer = Customer.new(customer_params)
    if customer.save
      render json: customer, status: :created
    else
      render json: customer.errors, status: :unprocessable_entity
    end
  end

  private

  def customer_params
    params.permit(:name)
  end
end
