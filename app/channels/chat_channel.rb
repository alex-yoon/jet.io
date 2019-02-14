class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:lobby_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    binding.pry
  end
end
