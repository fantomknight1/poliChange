class Record < ActiveRecord::Base
  scope :searchByCand, ->(candidate) {
    where('candidate like ?', "%#{candidate.upcase}%") if candidate.present?
  }

  scope :searchByParty, ->(party) {
    where(specific_party: party.upcase) if party.present?
  }
end
