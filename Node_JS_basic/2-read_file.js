const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split(/\r?\n/).filter(function (line) {
    return line.trim() !== '';
  });

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const rows = lines.slice(1).map(function (line) {
    return line.split(',').map(function (s) { return s.trim(); });
  });

  console.log('Number of students: ' + rows.length);

  const groups = {};
  rows.forEach(function (cols) {
    const firstname = cols[0];
    const field = cols[3];
    if (!firstname || !field) return;

    if (!groups[field]) groups[field] = [];
    groups[field].push(firstname);
  });

  Object.keys(groups).sort().forEach(function (field) {
    const list = groups[field].join(', ');
    console.log('Number of students in ' + field + ': ' + groups[field].length + '. List: ' + list);
  });
}

module.exports = countStudents;
