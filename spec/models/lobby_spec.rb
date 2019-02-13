require 'rails_helper'

RSpec.describe Lobby, type: :model do
  subject { FactoryBot.create(:lobby) }

  describe "validations:" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end
  end
end
