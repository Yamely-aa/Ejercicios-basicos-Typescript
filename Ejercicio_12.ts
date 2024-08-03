//Crea una clase `Animal` con propiedades `name` (string) y `sound` (string).

class Animal {
    name: string;
    sound: string;

    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }

    hacerSonido(): void {
        console.log(`${this.name} dice ${this.sound}`);
    }
}

