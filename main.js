class Student {
    name;
    studentId;
    enrolledCourses;
    balance;
    constructor(name) {
        this.name = name;
        this.studentId = this.generateStudentId();
        this.enrolledCourses = [];
        this.balance = 0;
    }
    generateStudentId() {
        // Generate a unique 5-digit student ID
        // You can implement your logic here
        return Math.random().toString(36).substring(2, 7).toUpperCase();
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`${this.name} paid ${amount} for tuition.`);
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log("Enrolled Courses:");
        this.enrolledCourses.forEach(course => console.log(course.name));
        console.log(`Balance: ${this.balance}`);
    }
}
class Course {
    name;
    code;
    instructor;
    students;
    constructor(name, code, instructor) {
        this.name = name;
        this.code = code;
        this.instructor = instructor;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
        student.enroll(this);
    }
    displayDetails() {
        console.log(`Course: ${this.name} (${this.code})`);
        console.log(`Instructor: ${this.instructor}`);
    }
}
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }
    enrollStudent(student, course) {
        course.addStudent(student);
    }
    displayStudentStatus(student) {
        student.showStatus();
    }
}
// Example usage
const studentManager = new StudentManager();
const student1 = studentManager.addStudent("Alice");
const course1 = new Course("Math", "MATH101", "Dr. Smith");
studentManager.enrollStudent(student1, course1);
student1.viewBalance();
student1.payTuition(100);
student1.showStatus();
export {};
