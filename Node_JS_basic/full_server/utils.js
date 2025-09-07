import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split(/\r?\n/).filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve({});
        return;
      }

      const rows = lines.slice(1).map((line) => line.split(',').map((s) => s.trim()));

      const groups = {};
      rows.forEach(([firstname, , , field]) => {
        if (!firstname || !field) return;
        if (!groups[field]) groups[field] = [];
        groups[field].push(firstname);
      });

      resolve(groups);
    });
  });
}

export default readDatabase;
