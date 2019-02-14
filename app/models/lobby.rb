class Lobby < ApplicationRecord
  has_many :messages
  
  validates :name, presence: true, length: { in: 2..32 }
end
