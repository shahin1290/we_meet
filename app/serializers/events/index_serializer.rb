class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :description, :location, :date_and_time
  belongs_to :group
end
