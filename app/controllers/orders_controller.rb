class OrdersController < ApplicationController
    before_action :authorize

    def index
        orders = current_user.orders
        render json: orders, include: :supplements
    end

    def show                
        order = current_user.orders.find_by(id: params[:id])
        if order
            render json: order
        else
            render json: { error: "Order not found" }, status: :unauthorized
        end
    end
    
    def create
        order = current_user.orders.create(order_params)
        supplements = (params[:supplements])
        supObjs = supplements.map{|s| Supplement.find_by(id: s)}
        orderSups = supObjs.each{|s| order.supplements<<s}

        if order.valid?
            render json: order, include: :supplements
        else
            render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        order = current_user.orders.find_by(id: params[:id])
        order.update(order_params)
        supplements = (params[:supplements])
        supObjs = supplements.map{|s| Supplement.find_by(id: s)}
        orderSups = order.supplements.replace(supObjs)

        if order.valid?
            render json: order, include: :supplements
        else
            render json: { errors: order.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        order = current_user.orders.find_by(id: params[:id])
        if order
            order.delete
            render json: order
        else
            render json: { error: "Order not found" }, status: :unauthorized
        end
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def order_params
        params.permit(:id, :name, :order_number, :quantity)
    end
    
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end