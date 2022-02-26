
class Cars {
    constructor(brand, year, power, color) {
        this.brand = brand;
        this.year = year;
        this.power = power;
        this.color = color;
    }
    characteristic() {
        document.write(`Марка авто : ${this.brand} <br> год выпуска: ${this.year} <br> мощность двигателя : ${this.power} <br>  цвет машины : ${this.color} <br>`);

    }
}

let cars = new Cars("BMW", "2011", "2.4", "white");
cars.characteristic();

class ElectroCars extends Cars {
    constructor(brand, year, power, color, battery) {
        super(brand, year, power, color);
        this.battery = battery;
    }
    promote() {
        document.write(` ${this.brand} заботится о природе`);
    }
}
let electroCars = new ElectroCars("Tesla", "2022", "x", "white");
electroCars.characteristic();
electroCars.promote(); 