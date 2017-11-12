class CreateCatatories < ActiveRecord::Migration[5.1]
  def change
    create_table :catatories do |t|
      t.string :name

      t.timestamps
    end
  end
end
