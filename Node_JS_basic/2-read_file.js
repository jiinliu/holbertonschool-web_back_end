const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  const lines = data.split(/\r?\n/).filter((l) => l.trim());
  const rows = lines.slice(1).map((l) => l.split(',').map((s) => s.trim()));

  console.log(`Number of students: ${rows.length}`);

  const groups = {};
  for (const [firstname, , , field] of rows) {
    if (!firstname || !field) continue;
    (groups[field] ||= []).push(firstname);
  }

  for (const field of Object.keys(groups).sort()) {
    console.log(`Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`);
  }
}

module.exports = countStudents;
