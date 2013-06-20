# TODO
task :call_page => :environment do
  uri = URI.parse('http://www.getboardgames.com/')
  Net::HTTP.get(uri)
end

task :category => :environment do
  c = Category.new
  c.name = "Cash Flow"
  c.save!
end