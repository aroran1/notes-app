const square = function(x) {
  return x * x;
};

// arrow function 1
const square1 = (x) => {
  return x * x;
};

// arrow function 2 - simpler funtion option
const square2 = x =>  x * x;

console.log(square(3));
console.log(square1(3));
console.log(square2(3));

// class methods
const event = {
  name: 'Birthday Party',
  printGuestList: function() {
    console.log(`Guest list for ${this.name}`);
  }
}
event.printGuestList();

// class methods - arrow function doesn't bind this and returns undefined
const event1 = {
  name: 'Birthday Party',
  printGuestList: () => {
    console.log(`Guest list for ${this.name}`);
  }
}
event1.printGuestList();


// class methods
// arrow function doesn't bind their own this value but they access the this value in the context of which they are created
// so this won't work for printGuestList method but works correctly for forEach within the parent method
const event3 = {
  name: 'Mia A',
  guestList: ['Aden', 'Sidi', 'Mia G'],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach(guest => {
      console.log(`${guest} is attending ${this.name} birthday Party`);
    });
  }
}
event3.printGuestList();
