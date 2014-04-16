ActiveAdmin.register Event do

  
  # See permitted parameters documentation:
  # https://github.com/gregbell/active_admin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #  permitted = [:permitted, :attributes]
  #  permitted << :other if resource.something?
  #  permitted
  # end
  permit_params :title, :subtitle, :date, :start, :end, :rsvp
  
  index do
    column :title
    column :date do |e|
      e.date.strftime("%A")
    end
    default_actions
  end


  form do |f|
    f.inputs "Event Details" do
      f.input :title
      f.input :subtitle
      f.input :date, :as => :select, :collection => { 'Monday' => '2014-04-21', 'Tuesday' => '2014-04-22', 'Wednesday' => '2014-04-23'}
      f.input :start, :as => :time, :minute_step => 15
      f.input :end, :as => :time, :minute_step => 15
      f.input :rsvp, :as => :url
    end
    
    f.actions
  end
  
end
