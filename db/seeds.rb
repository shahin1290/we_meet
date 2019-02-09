# frozen_string_literal: true

def attach_image(object, file_name)
  format = File.extname(file_name).strip.downcase[1..-1]
  file_path = Rails.root.join('client', 'we_meet_client', 'public', 'assets', 'images', file_name.to_s)
  object.image.attach(io: File.open(file_path),
                      filename: file_name.to_s,
                      content_type: "image/#{format}")
end

john = User.create(email: 'john@mail.com', password: 'password', name: 'John')
attach_image(john, 'person.jpg')

jane = User.create(email: 'jane@mail.com', password: 'password', name: 'Jane')
attach_image(jane, 'person.jpg')

thomas = User.create(email: 'thomas@mail.com', password: 'password', name: 'Thomas')
attach_image(jane, 'person.jpg')

oliver = User.create(email: 'oliver@mail.com', password: 'password', name: 'Oliver')
attach_image(jane, 'person.jpg')

attendees = [thomas, oliver]

tech = Category.create(name: 'Tech')
attach_image(tech, 'tech.png')

food = Category.create(name: 'Food')
attach_image(food, 'dining.jpg')

tech_group = Group.create(name: 'Craft Academy',
                          description: 'Learn to code',
                          location: 'Stockholm',
                          organizer: john,
                          category: tech)

attach_image(tech_group, 'tech.png')

food_group = Group.create(name: 'Food Lovers',
                          description: 'Gothenburg Food Enthusasts',
                          location: 'Gothenburg',
                          organizer: jane,
                          category: food)

attach_image(food_group, 'dining.jpg')

event1 = Event.create(title: 'Hackathon',
                      description: 'Come and code!',
                      location: 'Stockholm',
                      group: tech_group,
                      date: '2019-12-12',
                      time: '14:00')

attach_image(event1, 'hackathon.jpg')

event2 = Event.create(title: 'Come and cook!',
                      description: 'Gothenburg Food Lovers love to cook together',
                      location: 'Gothenburg',
                      group: food_group,
                      date: '2019-12-12',
                      time: '14:00')

attach_image(event2, 'family.png')

attendees.each do |attendee|
  event1.attendees.create(user: attendee)
  event2.attendees.create(user: attendee)
end
