class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :description, :location
  belongs_to :group
end
