const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    },
   get appetizers() {
    return this.appetizers;
  },
  set appetizers(appetizerIn) {
    this.appetizers = appetizerIn;
  },
  get mains() {
   return this.mains;
  },
  set mains(mainsIn) {
     this.mains = mainsIn;
  },
  get desserts() {
   return this.desserts;
  },
  set desserts(dessertsIn) {
    this.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
getRandomDishFromCourse (courseName) {
  const dishes = this._courses[courseName];
  let randomIndex = Math.floor(Math.random() * dishes.length); 
  return dishes[randomIndex];
},
generateRandomMeal() {
  const appetizers = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.price} The price is $${totalPrice.toFixed(2)}.`;
   },
};
 menu.addDishToCourse('appetizers', 'tempura vegetables', 6.50);
menu.addDishToCourse('appetizers', 'spring rolls', 6.00);
menu.addDishToCourse('appetizers', 'crab legs', 14.00);
menu.addDishToCourse('mains', 'california rolls', 5.50);
menu.addDishToCourse('mains', 'crab sashimi', 13.00);
menu.addDishToCourse('mains', 'albacore sushi', 10.00);
menu.addDishToCourse('desserts', 'tiramisu', 10.00);
menu.addDishToCourse('desserts', 'sesame cookies', 7.00);
menu.addDishToCourse('desserts', 'cheesecake', 15.00);
let meal = menu.generateRandomMeal();
console.log(meal);

