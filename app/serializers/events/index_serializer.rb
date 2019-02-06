class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  belongs_to :group

  def time
    object.time.to_formatted_s(:time)
  end
end
