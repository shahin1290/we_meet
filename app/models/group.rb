# frozen_string_literal: true

class Group < ApplicationRecord
  validates_presence_of :name, :description, :location
  has_many :members, class_name: 'Membership'
  has_many :events
  belongs_to :category

  def future_events
    events.future_events
  end

  def past_events
    events.past_events
  end
end
