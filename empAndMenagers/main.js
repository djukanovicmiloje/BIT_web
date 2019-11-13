function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}


function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype.getData() = function () {
    return this.name + " " + this.surname + " " + this.salary;
}
Employee.prototype.getSalary() = function () {
    return this.salary;
}
Employee.prototype.increaseSalary = function () {
    this.salary *= 1.1;
}




function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}




function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}