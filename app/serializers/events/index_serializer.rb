class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
  belongs_to :group
end
