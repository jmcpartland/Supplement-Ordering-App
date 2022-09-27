class SupplementsController < ApplicationController
    before_action :authorize

    def index
        supplements = Supplement.all
        render json: supplements
    end

    def create
        
        # binding.pry

        supplement = Supplement.create(supplement_params)
        if supplement.valid?
            render json: supplement
        else
            render json: { errors: supplement.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        supplement = current_user.supplements.find_by(id: params[:id])
        if supplement
            render json: supplement
        else
            render json: { error: "Supplement not found" }, status: :unauthorized
        end
    end

    def update
    end
    
    def destroy
    end


    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def supplement_params
        params.permit(:name, :manufacturer, :serving_size)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
