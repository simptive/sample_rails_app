class Teacher < ActiveRecord::Base
  belongs_to :school
  attr_accessible :education, :name
end
