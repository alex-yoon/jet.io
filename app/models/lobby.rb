class Lobby < ApplicationRecord
  validates :name, presence: true, length: { in: 2..32 }
end
