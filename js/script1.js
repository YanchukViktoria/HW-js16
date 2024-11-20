function Account({ login, email }) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function () {
    console.log(`${this.login}, ${this.email}`);
}

const mango = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com


/*  */

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

// Приклад використання
const mangoo = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mangoo.getInfo(); // User Mango is 2 years old and has 20 followers

const polyy = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

polyy.getInfo(); // User Poly is 3 years old and has 17 followers

/*  */

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        return this.items.push(item);
    }

    removeItem(item) {
        const itemInd = this.items.indexOf(item);
        this.items.splice(itemInd, 1);
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
   ]);
   
   const items = storage.getItems();
   console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
   
   storage.addItem('Дроїд');
   console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
   storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
   
/*  */

class StringBuilder{
    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

/*  */

class Car{
    static getSpecs(car) {
        console.log(`${car.maxSpeed}, ${car.speed},  ${car.isOn}, ${car.distance}, ${car.price}`);
    }

    constructor({ maxSpeed, price }) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    accelerate(value) {
        this.speed = Math.min(this.speed + value, this.maxSpeed);
    }

    decelerate(value) {
        this.speed = Math.min(this.speed - value, 0);
    }

    drive(hours) {
        this.distance += hours * this.speed;
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);