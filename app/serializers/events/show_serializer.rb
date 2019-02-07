class Events::ShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  belongs_to :group, serializer: Groups::ShowSerializer

  def time
    object.time&.to_formatted_s(:time)
  end
end
