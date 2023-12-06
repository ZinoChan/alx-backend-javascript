interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Sakata',
  lastName: 'Gintoki',
  age: 30,
  location: 'Edo',
};

const student2: Student = {
  firstName: 'Yor',
  lastName: 'Briar',
  age: 27,
  location: 'Ostania',
};

const studentsList = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);

  cell1.textContent = student.firstName;
  cell2.textContent = student.lastName;
  cell3.textContent = `${student.age}`;
  cell4.textContent = student.location;
});
table.classList.add('styled-table');

const style = document.createElement('style');
style.textContent = `
  .styled-table {
    width: 500px;
    border-collapse: collapse;
    margin: 20px auto;
  }

  .styled-table th, .styled-table td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
  }

  .styled-table th {
    background-color: #f2f2f2;
  }
`;

document.head.appendChild(style);
