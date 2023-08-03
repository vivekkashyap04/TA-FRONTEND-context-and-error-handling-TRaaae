class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    changeName(value){
          this.name = value;
          return this.name;
    }
}

let person = new User('vivek',23);