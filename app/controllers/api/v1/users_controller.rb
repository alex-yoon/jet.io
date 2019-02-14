class Api::V1::UsersController < ApiController
  def current
    if current_user.nil?
      render json: {user: {}}
    else
      render json: current_user, serializer: CurrentUserSerializer
    end
  end
end
