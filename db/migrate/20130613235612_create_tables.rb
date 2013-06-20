class CreateTables < ActiveRecord::Migration
  def up
    create_table(:categories) do |t|
      t.string        :name
      t.attachment    :icon
      t.timestamps
    end

    create_table(:statements) do |t|
      t.integer       :user_id
      t.integer       :category_id
      t.text          :content
      t.timestamps
    end

    create_table(:actions) do |t|
      t.integer       :statement_id
      t.string        :content
      t.timestamps
    end
  end

  def down
    drop_table :categories
    drop_table :statements
    drop_table :actions
  end
end
