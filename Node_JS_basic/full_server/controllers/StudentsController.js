import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const groups = await readDatabase(databasePath);
      
      let output = 'This is the list of our students\n';
      
      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(groups).sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      
      sortedFields.forEach((field) => {
        const students = groups[field];
        const list = students.join(', ');
        output += `Number of students in ${field}: ${students.length}. List: ${list}\n`;
      });
      
      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const databasePath = process.argv[2];
      const groups = await readDatabase(databasePath);
      
      const students = groups[major] || [];
      const list = students.join(', ');
      
      response.status(200).send(`List: ${list}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;