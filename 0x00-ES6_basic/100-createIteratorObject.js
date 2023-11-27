export default function createIteratorObject(report) {
  const ans = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees[department]) {
      const employees = report.allEmployees[department];
      ans.push(...employees);
    }
  }
  return ans;
}
