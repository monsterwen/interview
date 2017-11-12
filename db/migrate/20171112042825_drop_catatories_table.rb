class DropCatatoriesTable < ActiveRecord::Migration[5.1]
  def change
      drop_table :catatories

  end
  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
