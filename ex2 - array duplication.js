// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Jolie", age: 20, batch: 10 },
  { firstName: "Bình", lastName:"Bev", age: 22, batch:10 },
  { firstName: "Cẩm", lastName:"Bodge", age: 21, batch:11 },
  { firstName: "An", lastName:"Tian", age: 19, batch:11 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, lastName, newAge, batch) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch);
  if (student) {
    student.age = newAge;
  }
  
}


// 1 - Update An age to 30
updateStudentAge("An", "Tian", 30, 11);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
