export interface Duck {
    name : string;
    numOfLegs : number;
    makeSound: (sound: string) => void;
}
 
const duck1 : Duck = {
    name : 'dhana',
    numOfLegs : 2,
   // makeSound: (sound) => console.log(sound) //Error : parameter 'sound' has implicitly 'any' type.
   makeSound : (sound : string) => console.log(sound)
}
 
const duck2 : Duck= {
    name : "pintu",
    numOfLegs : 2,
    makeSound : (sound : string) => console.log(sound)
}
 
duck1.makeSound('quack');
duck2.makeSound('huuuu');
 
export const ducks = [duck1, duck2];