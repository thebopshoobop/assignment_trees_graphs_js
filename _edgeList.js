const Person = require("./Person");
const people = [
  new Person(0, "Bob"),
  new Person(1, "Harry"),
  new Person(2, "Sally"),
  new Person(3, "Sam"),
  new Person(4, "Michael"),
  new Person(5, "Michelle"),
  new Person(6, "Alok"),
  new Person(7, "Dan"),
  new Person(8, "Nick"),
  new Person(9, "Olga"),
  new Person(10, "Alice"),
  new Person(11, "Donald"),
  new Person(12, "Garrett"),
  new Person(13, "Xin"),
  new Person(14, "Mike"),
  new Person(15, "Adam"),
  new Person(16, "Peter"),
  new Person(17, "Andur"),
  new Person(18, "Tom"),
  new Person(19, "Boris")
];

module.exports = [
  [people[1], people[2], 2],
  [people[1], people[0], 9],
  [people[1], people[4], 11],
  [people[1], people[16], 12],
  [people[2], people[7], 16],
  [people[2], people[14], 1],
  [people[2], people[10], 7],
  [people[3], people[19], 16],
  [people[4], people[7], 19],
  [people[4], people[2], 8],
  [people[4], people[17], 11],
  [people[4], people[14], 11],
  [people[5], people[3], 9],
  [people[5], people[10], 12],
  [people[5], people[6], 12],
  [people[7], people[19], 13],
  [people[7], people[10], 11],
  [people[7], people[5], 1],
  [people[8], people[15], 1],
  [people[8], people[16], 20],
  [people[8], people[7], 9],
  [people[8], people[0], 9],
  [people[9], people[6], 11],
  [people[9], people[14], 20],
  [people[9], people[19], 12],
  [people[10], people[3], 19],
  [people[11], people[7], 19],
  [people[12], people[10], 15],
  [people[12], people[16], 7],
  [people[12], people[17], 16],
  [people[12], people[18], 4],
  [people[13], people[8], 5],
  [people[13], people[5], 3],
  [people[13], people[18], 12],
  [people[13], people[15], 17],
  [people[14], people[12], 10],
  [people[15], people[0], 18],
  [people[15], people[17], 8],
  [people[16], people[4], 12],
  [people[16], people[11], 10],
  [people[16], people[2], 1],
  [people[17], people[14], 9],
  [people[17], people[5], 17],
  [people[18], people[14], 9],
  [people[18], people[16], 14],
  [people[19], people[2], 5],
  [people[19], people[18], 3],
  [people[19], people[12], 5],
  [people[19], people[13], 7]
];
