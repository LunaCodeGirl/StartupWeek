class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @mon_events = Event.where(date:'2014-04-21')
    @tue_events = Event.where(date:'2014-04-22')
    @wed_events = Event.where(date:'2014-04-23')
    @thu_events = Event.where(date:'2014-04-24')
    @fri_events = Event.where(date:'2014-04-25')
  end
end
