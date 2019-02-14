class Message < ApplicationRecord
  belongs_to :user
  belongs_to :lobby

  validates :body, presence: true, length: { in: 1..2000 }
end
