class Events::ForGroupCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :location
end
