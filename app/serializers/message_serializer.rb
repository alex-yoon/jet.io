class MessageSerializer < ActiveModel::Serializer
  attributes :body, :author

  def author
    return {
      name: object.user.name,
      color: object.user.color
    }
  end
end
