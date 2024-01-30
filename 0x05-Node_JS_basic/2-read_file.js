const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    let csCount = 0;
    let sweCount = 0;

    const csFirstNames = [];
    const sweFirstNames = [];

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      if (field === 'CS') {
        csCount++;
        csFirstNames.push(firstname);
      } else if (field === 'SWE') {
        sweCount++;
        sweFirstNames.push(firstname);
      }
    });

    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csFirstNames.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweFirstNames.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
