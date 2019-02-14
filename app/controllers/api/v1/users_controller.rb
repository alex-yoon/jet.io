class Api::V1::UsersController < ApiController
  def current
    render json: current_user, serializer: CurrentUserSerializer
  end
end
