class School < ActiveRecord::Base
  attr_accessible :name, :size
  has_many :teachers
  #accepts_nested_attributes_for :teachers
end
