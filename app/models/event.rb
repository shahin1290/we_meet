class Event < ApplicationRecord
  validates_presence_of :title
  has_many :attendee_list, class_name: 'Rsvp'
end
