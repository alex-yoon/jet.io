require 'rails_helper'

RSpec.describe Message, type: :model do
  subject { FactoryBot.create(:message) }

  describe "validations:" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is invalid without a body" do
      subject.body = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a user" do
      subject.user = nil
      expect(subject).to_not be_valid
    end

    it "is invalid without a lobby" do
      subject.lobby = nil
      expect(subject).to_not be_valid
    end
  end
end
