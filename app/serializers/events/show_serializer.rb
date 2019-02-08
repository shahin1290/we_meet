class Events::ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  attribute :attendees
  belongs_to :group, serializer: Groups::ShowSerializer
  def attendees
    object.attendees.each.map do |attendee|
      Users::ShowSerializer.new(attendee.user)
    end
  end
end
