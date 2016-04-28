class CreateRecord < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :record_id
      t.string :filer
      t.string :original_name
      t.string :contributor
      t.string :business
      t.string :industry
      t.string :sector
      t.integer :amount
      t.date :date
      t.date :last_updated
      t.string :candidate
      t.string :candidate_entity
      t.string :specific_party
      t.string :general_party
    end
  end
end
