class Api::V1::LobbiesController < ApiController
  def index
    render json: Lobby.all
  end
end
