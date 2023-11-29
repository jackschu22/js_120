// JS120 Small Problems: Objects Problem 5:

// Create a school object. The school object uses the same kind of student object as 
// the previous exercise. It has methods that use and update information about the 
// student. Implement the following methods for the school object:

// - addStudent: Adds a student by creating a new student and adding the student to a 
// collection of students. The method adds a constraint that the year can only be any 
// of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student 
// object if year is valid otherwise it logs "Invalid Year".
// - enrollStudent: Enrolls a student in a course.
// - addGrade: Adds the grade of a student for a course.
// - getReportCard: Logs the grades of a student for all courses. If the course has no 
// grade, it uses "In progress" as the grade.
// - courseReport: Logs the grades of all students for a given course name. Only students 
// with grades are part of the course report.

function createStudent(name, year) {
	return {
		name,
		year,
		courses: [],

		info() {
			console.log(`${this.name} is a ${year} year student`);
		},

		addCourse(course) {
			this.courses.push(course);
		},

		addNote(courseCode, note) {
			this.courses.forEach(course => {
				if (course['code'] === courseCode) {
					if (course['note']) {
						course['note'] = course['note'] + '; ' + note;
					} else course['note'] = note;
				}
			});
		},

		updateNote(courseCode, note) {
			this.courses.forEach(course => {
				if (course['code'] === courseCode) {
					course['note'] = note;
				}
			});
		},

		listCourses() {
			return this.courses;
		},

		viewNotes() {
			this.courses.forEach(course => {
				if (course['note']) {
					console.log(`${course['name']}: ${course['note']}`);
				}
			});
		},
	}
}

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// let foo = {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// };

// let bar = {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// };

// let qux = {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// };

let school = {
	students: [],

	addStudent(name, year) {
		if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
			let student = createStudent(name, year);
			this.students.push(student);
			return student;
		} else {
			console.log('Invalid Year');
		}
	}
}

let student1 = school.addStudents("foo", "3rd");
let student2 = school.addStudents("bar", "2nd");
school.enrollStudent(student1, { name: 'Math', code: 101});
school.enrollStudent(student1, { name: 'English', code: 105});
school.enrollStudent(student2, { name: 'Math', code: 101});
school.addGrade(95, student1, 101);
school.addGrade(85, student2, 101);
school.getReportCard(student1);
school.courseReport("Math");
school.courseReport("Physics");


// school.getReportCard(foo);

// school.courseReport('Math');

// school.courseReport('Advanced Math');

// school.courseReport('Physics');





