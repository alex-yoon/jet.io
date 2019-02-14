class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:lobby_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    new_message = Message.create({
      body: data['message']['body'],
      user: current_user,
      lobby_id: params['lobby_id']
    })

    message_json = {
      body: new_message.body,
      author: {
        name: current_user.name,
        color: current_user.color
      }
    }

    channel_name = "chat_#{params['lobby_id']}"
    ActionCable.server.broadcast(channel_name, message_json)
  end
end
