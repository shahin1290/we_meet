class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :group
end
