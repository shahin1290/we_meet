class Events::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title, :date
  belongs_to :group
end
