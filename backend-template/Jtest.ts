class myClass {
    private readonly x: string = '1234';

    public getX(): string {
        return this.x;
    }
}

const instance = new myClass();
console.log(instance.getX()); // Output: '1234'