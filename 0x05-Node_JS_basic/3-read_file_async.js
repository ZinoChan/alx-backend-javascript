const fs = require('fs').promises;

async function countStudents(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    const lines = data.split('\n');

    const students = {};
    const fields = {};

    let length = 0;

    lines.forEach((line) => {
      if (line) {
        length += 1;
        const [name, , , field] = line.split(',');

        students[field] = students[field] || [];
        students[field].push(name);

        fields[field] = (fields[field] || 0) + 1;
      }
    });

    const count = length - 1;
    console.log(`Number of students: ${count}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }

    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}


module.exports = countStudents;
