require 'rails_helper'

RSpec.describe Location, type: :model do
  describe "validations" do
    it { should validate_presence_of(:name) }
  end

  describe "assocations" do
    it { should have_many(:people) }
  end
end
