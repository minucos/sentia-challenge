require 'rails_helper'

RSpec.describe PersonAffiliation, type: :model do
  describe "assocations" do
    it { should belong_to(:affiliation) }
    it { should belong_to(:person) }
  end
end
