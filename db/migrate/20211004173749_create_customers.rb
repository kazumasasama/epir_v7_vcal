class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.date :birthday
      t.integer :gender
      t.string :phone
      t.string :email
      t.string :password
      t.string :line_id
      t.integer :appointment_id
      t.text :memo

      t.timestamps
    end
  end
end
