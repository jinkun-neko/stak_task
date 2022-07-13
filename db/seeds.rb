10.times do
  user = User.create!(
    name: Faker::Name.name,
    nickname:Faker::Name.first_name
    )
  10.times do
    user.books.create!(title:  Faker::Book.title
    )
  end
end
