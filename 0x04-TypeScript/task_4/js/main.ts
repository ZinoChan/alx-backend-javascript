export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Sakata',
  lastName: 'Gintoki',
  experienceTeachingC: 10,
};

cpp.teacher = cTeacher;
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.teacher = cTeacher;
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.teacher = cTeacher;
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
