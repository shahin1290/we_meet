# frozen_string_literal: true

class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  belongs_to :group, serializer: Groups::ShortShowSerializer
  attribute :organizer

  def organizer
    { email: object.group.organizer.email }
  end

  def time
    object.time.to_formatted_s(:time)
  end
end
