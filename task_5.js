class Car {
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
        static getSpecs(car) {
            console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price);
        }
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor(object) {
        this._speed = 0;
        this._price = object.price;
        this.maxSpeed = object.maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
  
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
    get price() {
        return this._price;
    }

    set price(priceValue) {
        return this._price = priceValue;
    }
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        return this.isOn = true;
    }
  
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        return this.isOne = false,
               this.speed = 0;
    }
  
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        if(this.speed <= this.maxSpeed) {
            return this.speed += value;
        }
    }
  
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
        if(this.speed > 0) {
            return this.speed -= value;
        }
    }
  
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        if(this.isOn === true) {
            return this.distance += this.speed * hours;
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000