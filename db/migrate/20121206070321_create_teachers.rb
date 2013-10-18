class CreateTeachers < ActiveRecord::Migration
  def up
    create_table :teachers do |t|
      t.string :name
      t.integer :education
      t.references :school

      t.timestamps
    end
    add_index :teachers, :School_id
  end
  def down
    drop_table :teachers
    #remove_index :teachers, :School_id
  end
end
