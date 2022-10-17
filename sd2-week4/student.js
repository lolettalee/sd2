class Student {
    // attributes
    firstName;
    lastName;
    courseId;
    birthYear;

    constructor(firstName, lastName, courseId, birthYear) {
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.courseId = courseId;
        this.birthYear = birthYear;
        // 'this' keyword refers to the local object
        // sets attributes of an object in the constructor
    }

    getFormattedName() {
        return this.firstName + ' ' + this.lastName + this.birthYear;
    }
}

class Lesson {
    // array of Students
    teacherName;
    roomNumber;

    constructor(teacherName, roomNumber) {

        this.teacherName = teacherName;
        this.roomNumber = roomNumber;
    }

    addStudent() {
        return this.firstName + ' ' + this.lastName + ' ' + courseId;
    }
}