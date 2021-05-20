# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require"faker"
Department.destroy_all
15.times do 
  department = Department.create(
   name: Faker::Space.unique.star,
  )
  5.times do
   item = department.items.create(
      name: Faker::Book.title,
      price: Faker::Number.decimal(l_digits: 2),
    )
    2.times do
      item.reviews.create(
        body: Faker::Quote.famous_last_words
      )
    end
  end
end
  puts "Seeded, you have #{Department.all.size} Departments."
  puts "Seeded, you have #{Item.all.size} Items"
  puts "Seeded, you have #{Review.all.size} Reviews"