class Event < ApplicationRecord
  validates_presence_of :title
  has_many :attendees, class_name: 'Rsvp'
  belongs_to :group
end