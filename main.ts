 import inquirer from "inquirer";

class Student {
    name: string;
    studentId: string;
    enrolledCourses: Course[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentId = this.generateStudentId();
        this.enrolledCourses = [];
        this.balance = 0;
    }

    private generateStudentId(): string {
        // Generate a unique 5-digit student ID
        // You can implement your logic here
        return Math.random().toString(36).substring(2, 7).toUpperCase();
    }

    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }

    viewBalance(): void {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`${this.name} paid ${amount} for tuition.`);
    }

    showStatus(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log("Enrolled Courses:");
        this.enrolledCourses.forEach(course => console.log(course.name));
        console.log(`Balance: ${this.balance}`);
    }
}

class Course {
    name: string;
    code: string;
    instructor: string;
    students: Student[];

    constructor(name: string, code: string, instructor: string) {
        this.name = name;
        this.code = code;
        this.instructor = instructor;
        this.students = [];
    }

    addStudent(student: Student): void {
        this.students.push(student);
        student.enroll(this);
    }

    displayDetails(): void {
        console.log(`Course: ${this.name} (${this.code})`);
        console.log(`Instructor: ${this.instructor}`);
    }
}

class StudentManager {
    students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(name: string): Student {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        return newStudent;
    }

    enrollStudent(student: Student, course: Course): void {
        course.addStudent(student);
    }

    displayStudentStatus(student: Student): void {
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
