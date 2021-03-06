require 'rails_helper'

RSpec.describe Person, type: :model do
  describe "validations" do
    it { should validate_presence_of(:first_name) }
  end

  describe "assocations" do
    it { should have_many(:locations) }
    it { should have_many(:affiliations) }
  end

end
