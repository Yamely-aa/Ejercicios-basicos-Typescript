//Agrega un método a la clase `Animal` que imprima el nombre y sonido del animal

class AnimalSound {
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
