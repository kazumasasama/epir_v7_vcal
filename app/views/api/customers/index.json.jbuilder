json.set! :customers do
  json.array! @customers do |customer|
    json.extract! customer, :id, :name, :birthday, :gender, :phone, :email, :line_id, :appointment_id, :memo
  end
end