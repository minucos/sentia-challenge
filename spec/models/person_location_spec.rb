require 'rails_helper'

RSpec.describe PersonLocation, type: :model do
  describe "assocations" do
    it { should belong_to(:location) }
    it { should belong_to(:person) }
  end
end
