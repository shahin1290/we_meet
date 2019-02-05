class Events::ForGroupCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :description, :location, :date_and_time
end
