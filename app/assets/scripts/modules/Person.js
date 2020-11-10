const Person = (fName,fColor) => {
    this.name = fName;
    this.favColor = fColor;
    this.greet = () => {
        console.log(`Hello, my name is: ${this.name} and my favorite color is ${this.favColor}`);
    }
};

export default Person;