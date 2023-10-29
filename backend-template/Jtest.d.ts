declare function WithFuel<T extends {
    new (...args: any[]): {};
}>(target: T): {
    new (...args: any[]): {
        fuel: number;
        foo: Function;
        isEmpty(): boolean;
    };
} & T;
declare class Rocket {
    fuel: number;
}
declare const rocket: Rocket;
