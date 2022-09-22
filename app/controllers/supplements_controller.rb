class SupplementsController < ApplicationController
    before_action :authorize

    def index
        supplements = Supplement.all
        render json: supplements
    end

    private

    def current_user
        User.find_by(:id session[:user_id])
    end

    def supplement_params
        params.permit(:name, :manufacturer, :serving_size)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
