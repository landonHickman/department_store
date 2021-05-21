# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require"faker"
Department.destroy_all
15.times do #15 departments
  department = Department.create( #the variable is necesarry so that it doesnt create duplicate
    # departments on line 16.
   name: Faker::Space.unique.star,
  )
  5.times do # 75 Items
   item = department.items.create( #the variable is necesarry so that it doesnt create duplicate
    # items on line 21.
      name: Faker::Book.title,
      price: Faker::Number.decimal(l_digits: 2),
    )
    2.times do # 150 reviews
      item.reviews.create(
        body: Faker::Quote.famous_last_words
      )
    end
  end
end
#lets me know the quantity of what i have when i db:seed.
  puts "Seeded, you have #{Department.all.size} Departments."
  puts "Seeded, you have #{Item.all.size} Items"
  puts "Seeded, you have #{Review.all.size} Reviews"