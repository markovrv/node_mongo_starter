class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}
User.prototype.sayHi = function() {
    console.log(`Меня зовут ${this.name}`);
};
 
module.exports = User;