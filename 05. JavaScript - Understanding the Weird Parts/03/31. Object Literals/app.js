var Tony = {
  firstname: "Tony",
  lastname: "Alicea",
  address: {
    street: "111 Main St.",
    city: "New York",
    state: "NY",
  },
};

function greet(person) {
  console.log(`Hi ${person.firstname} ${person.lastname}`);
}

greet(Tony); // Hi Tony Alicea

greet({
  firstname: "Mary",
  lastname: "Doe",
}); // Hi Mary Doe

Tony.address2 = {
  street: "333 Second St.",
};

console.log(Tony); // {firstname: "Tony", lastname: "Alicea", address: {…}, address2: {…}}
