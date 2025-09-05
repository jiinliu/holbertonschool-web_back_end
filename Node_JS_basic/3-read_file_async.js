const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const rows = lines.slice(1).map((line) => line.split(',').map((s) => s.trim()));
      console.log(`Number of students: ${rows.length}`);

      const groups = {};
      rows.forEach(([firstname, , , field]) => {
        if (!firstname || !field) return;
        if (!groups[field]) groups[field] = [];
        groups[field].push(firstname);
      });

      Object.keys(groups).sort().forEach((field) => {
        const list = groups[field].join(', ');
        console.log(`Number of students in ${field}: ${groups[field].length}. List: ${list}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
