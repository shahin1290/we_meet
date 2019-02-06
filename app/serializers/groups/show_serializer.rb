class Groups::ShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location
  has_many :future_events, serializer: Events::ForGroupCollectionSerializer
  has_many :past_events, serializer: Events::ForGroupCollectionSerializer
end


