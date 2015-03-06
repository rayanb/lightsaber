true_or_false = [true, false]

100.times do
  User.create(name: Faker::Name.name, description: Faker::Lorem.paragraph, public_user: true_or_false[rand(0..1)])
end