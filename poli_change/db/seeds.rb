# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Task.create({name:'Get Stuff Done', status:false })
Task.create({name:'Get other StuffDone', status:false })
Task.create({name:'Get last Stuff Done', status:false })

# Record.create({ record_id: ,filer:, original_name:, contributor:, business:, industry:,
# sector:, amount:, date:, last_updated:, candidate:, candidate_entity:, specific_party:,
# general_party:})

my_data = HTTParty.get("http://api.followthemoney.org/?p=2&rpp=100&y=2016&f-core=1&f-fc=1&c-exi=1&gro=d-id,c-t-id&APIKey=d83d4b05a2eae24efcbf8dd91f6e934b&mode=json", {timeout: 15000})
my_data['records'].each do |r|
  record = Record.new(record_id: r['record_id'], filer: r['Filer']['Filer'], original_name: r['Original_Name']['Original_Name'], contributor: r['Contributor']['Contributor'],
    business: r['Specific_Business']['Specifict_Business'], industry: r['General_Industry']['General_Industry'], sector: r['Broad_Sector']['Broad_Sector'],
    amount: r['Amount']['Amount'], date: r['Date']['Date'], last_updated: r['Last_Updated']['Last_Updated'], candidate: r['Candidate']['Candidate'],
    candidate_entity: r['Candidate_Entity']['Candidate_Entity'], specific_party: r['Specific_Party']['Specific_Party'], general_party: r['General_Party']['General_Party'] )
  record.save
end
