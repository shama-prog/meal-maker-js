const companies = [
    {name: "company1", category: "finance", start: 1981, end: 1884},
    {name: "company2", category: "retail", start: 1983, end: 2005},
    {name: "company3", category: "auto", start: 1985, end: 2000},
    {name: "company4", category: "technology", start: 1990, end: 2010},
    {name: "company5", category: "finance", start: 1995, end: 2015},
    {name: "company6", category: "retail", start: 1999, end: 2017},
    {name: "company7", category: "auto", start: 2000, end: 2020},
    {name: "company8", category: "technology", start: 1997, end: 2012},
    {name: "company9", category: "retail", start: 1998, end: 2001},
];

const ages = [23, 12, 15, 18, 19, 21, 14, 5, 54, 44, 20, 63, 34, 27, 38];
 //for (let i = 0; i < companies.length; i++) {
  //console.log(companies[i]);

 //}
 // ForEach loop
 //companies.forEach(function(company) {
  //console.log(company);
 //});
//filter
//let canDrink = [];
//for (let i = 0; i < ages.length; i++) {
 //if(ages[i] >= 21 ) {
 	//canDrink.push(ages[i]);

 //}
//}
//const canDrink = ages.filter(function(age) {
  //if(age >= 21) {
 //return true;
  //}
//}); 
// use arrow function
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);
//filter Retail companies
// const retailcompanies = companies.filter(function(company) {
//  if(company.category === 'retail') {
//  	return true;

//  }
// });
//arrow function
const retailcompanies = companies.filter(company => company.category === 'retail'); 
console.log(retailcompanies);
//get companies 1980 t0 1990
const eightycompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightycompanies);
// get companies lasttenyears
const lasttenyear = companies.filter(company => (company.end - company.start >= 10));
 console.log(lasttenyear);
 //create array of company name
 const companyName = companies.map(function(company){
 return company.name;
 });
 console.log(companyName);

 // const testMap = companies.map(function(company){
 // return `${company.name} [${company.start} - ${company.end}]`;
 // });
 // console.log(testMap);
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
 console.log(testMap);

 const agesSquare = ages.map(age => Math.sqrt(age));
 console.log(agesSquare);

 const agesTimeTwo = ages.map(age => age * 2);
 console.log(agesTimeTwo);

// const agesMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
//  console.log(agesMap);
//sort
// const sortedcompanies = companies.sort(function(c1, c2){
//  if(c1.start > c2.start) {
//   return 1;
//  } else {
//  	return -1;
//  }
// });
const sortedcompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedcompanies);
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
// 	ageSum += ages[i];
// 	console.log(ageSum);

// }

const agesum = ages.reduce(function(total, age) {
 return total + age;
}, 0);
console.log(agesum);
const agesumm = ages.reduce((total, age) => total + age, 0);
console.log(agesumm);
const TotalYear = companies.reduce(function(total, company) {
 return total + (company.end - company.start);
}, 0);
console.log(TotalYear);
const totalyear = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalyear);

const combine = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a -b)
.reduce((a, b) => a + b, 0);
console.log(combine);
