"use strict";
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullname() {
        return this.firstname + " " + this.lastname;
    }
}
class Student extends Person {
    constructor(studentId, firstname, lastname) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
}
class Teacher extends Person {
    getFullname() {
        return 'Tr' + this.firstname + " " + this.lastname;
    }
}
let teacher = new Teacher("AKIMANA", "Viateur");
console.log(teacher.getFullname());
//# sourceMappingURL=index.js.map