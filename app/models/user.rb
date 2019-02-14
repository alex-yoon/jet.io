class User < ApplicationRecord
  has_many :messages

  validates :name, presence: true, length: { in: 2..16 },
    format: {
      with: /\A[A-Za-z0-9\-\/\.\s]+\z/,
      message: "may only consist of alphanumeric characters"
    }
  validates :color, presence: true, length: { is: 6 }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
