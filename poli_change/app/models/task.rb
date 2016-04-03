class Task < ActiveRecord::Base
  require('httparty')

 def self.get_data
   my_data = HTTParty.get("http://api.followthemoney.org/?p=0&rpp=100&y=2016&f-core=1&f-fc=1&c-exi=1&gro=d-id,c-t-id&APIKey=d83d4b05a2eae24efcbf8dd91f6e934b&mode=json", {timeout: 15000})
   my_data[:records].each do |record|
     Record.new({record_id: record[:record_id], filer: record[:Filer][:Filer], original_name: record[:Original_Name][:Original_Name], contributor: record[:Contributor][:Contributor],
       business: record[:Specific_Business][:Specifict_Business], industry: record[:General_Industry][:General_Industry], sector: record[:Broad_Sector][:Broad_Sector],
       amount: record[:Amount][:Amount], date: record[:Date][:Date], last_updated: record[:Last_Updated][:Last_Updated], candidate: record[:Candidate][:Candidate],
       candidate_entity: record[:Candidate_Entity][:Candidate_Entity], specific_party: record[:Specific_Party][:Specific_Party], general_party: record[:General_Party][:General_Party] })
   end
 end

end
