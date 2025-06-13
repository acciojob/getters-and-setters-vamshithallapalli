//complete this code
class Person {
	private _name: string;
	private _age : number;

	constructor(name: string, age: number){
		this._name = name;
		this._age = age;
	}

	get name():string{
		return this._name;
	}

	get age(): number{
		return this._age;
	}

	set age(age: number) {
    this._age = age;
  }
}

class Student extends Person {
	study(): void{
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
