class Users::MeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :email
  attribute :image_url

  has_many :organized_groups, serializer: Groups::ShowSerializer

  def image_url
    if Rails.env.test?
      rails_blob_url(object.image) if object.image.attachment
    else
      object.image.service_url(expires_in: 1.hour, disposition: 'inline') if object.image.attachment
    end
  end
end
