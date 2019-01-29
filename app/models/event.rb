class Event < ApplicationRecord
  validates_presence_of :title
  has_many :attendees, class_name: 'Rsvp'
  belongs_to :group

  scope :future_events, lambda{ where("date >= ?", Date.today) }
  scope :past_events, lambda{ where("date <= ?", 1.day.ago) }

end