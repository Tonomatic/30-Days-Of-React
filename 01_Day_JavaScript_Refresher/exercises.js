const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1
const newArray = [];

// 2
const fiveArray = [1, 2, 3, 4, 5];

// 3
const length = fiveArray.length;

// 4
const first = fiveArray[0];
const middle = fiveArray[Math.floor(fiveArray.length / 2)];
const last = fiveArray[fiveArray.length - 1];

// 5
const mixedDataTypes = [1, "string", ["array"], { obj: "1" }, null];

// 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// 10
itCompanies.forEach((element) => {
  console.log(element);
});

// 11
itCompanies.forEach((element) => {
  const newName = element.toUpperCase();
  console.log(newName);
});

// 12
itCompanies.forEach((e) => {
  if (e === itCompanies[itCompanies.length - 2]) {
    console.log(e + " and ");
  } else if (e === itCompanies[itCompanies.length - 1]) {
    console.log(`${e} are big IT companies.`);
  } else {
    console.log(e + ", ");
  }
});

// 13 