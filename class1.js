class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet = function () {
        console.log(this.name, this.age);
    };
}


let e1 = new Person("amit",23)
 e1.greet()