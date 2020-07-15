'use strict'

const Account = function (login, email) {
    this.login = login;
    this.email = email;
};

Account.prototype.getInfo = function () {
    return console.log(`Login:${this.login}, Email:${this.email}`)
}

const mango = new Account('Mango', 'mango@mail.com')
console.log(mango);

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly)

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// console.log(Account.prototype.getInfo); // function



