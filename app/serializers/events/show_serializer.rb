class Events::ShowSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :date, :time, :description, :location
  belongs_to :group, serializer: Groups::ShowSerializer
  attribute :image_url

  def image_url
    if Rails.env.test?
      rails_blob_url(object.image) if object.image.attachment
    else
      object.image.service_url(expires_in: 1.hour, disposition: 'inline') if object.image.attachment
    end
  end

end
