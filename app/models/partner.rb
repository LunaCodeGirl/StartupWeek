class Partner < ActiveRecord::Base

  validates :url, :logo_url, url: true


end
