class Api::V1::MessagesController < ApiController
  def index
    lobby_id = params['lobby_id']
    render json: Message.limit(50)
      .where(lobby_id: lobby_id)
      .order("id desc")
      .reverse  # Renders oldest to newest
  end
end
