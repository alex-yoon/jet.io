class Api::V1::MessagesController < ApiController
  def index
    if current_user.nil?
      head 403
    else
      render json: Message.limit(50)
        .where(lobby_id: params['lobby_id'])
        .order("id desc")
        .reverse, # Renders oldest to newest
        root: "messages"
    end
  end
end
