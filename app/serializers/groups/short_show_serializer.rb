class Groups::ShortShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location
  attribute :image_url
  has_many :future_events, serializer: Events::ForGroupCollectionSerializer
  has_many :past_events, serializer: Events::ForGroupCollectionSerializer

  def image_url
    if Rails.env.test?
      rails_blob_url(object.image) if object.image.attachment
    else
      object.image.service_url(expires_in: 1.hour, disposition: 'inline') if object.image.attachment
    end
  end
  
  def description
    object&.description
  end

  def location
    object&.location
  end

end


