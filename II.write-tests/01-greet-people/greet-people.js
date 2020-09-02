/*
  Let's trace this piece of code - what is the value of result with this input*/
  var mentors = ['Irina', 'Ashleigh', 'Etza']
  
function greetPeople(people) {
  var greeting = "Hello ";
  const res = people.map
    ((person) => greeting
    +person)
  return res
}
module.exports = greetPeople;


/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
