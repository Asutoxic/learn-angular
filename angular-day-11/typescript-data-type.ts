let someString: string // string, char
let someNumber: number // float, double, int
let boolean: boolean // true, false
let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
let someStringArray: string[]; // tương tự cho number[], boolean[], any[] // Array<string>
let someObject: object;
let someNull: null;
let someUndefined: undefined;
let someUnknown: unknown;
let someNever: never; // ví dụ như một hàm throw exception
function someFunc(): string | never {
    if (true) {
        throw new Error();
    } return '';
}
let someTuple: [string, number]; // là một array có vị trí nó xác định sẵn
let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi (undefined)
function someVoidFunc() {
    console.log();
}
let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi


// interface

interface User {
    firstName: string,
    lastName: string,
    age?: number
}

// type
type UserType = {
    firstName: string,
    lastName: string
}

const user: User = {
    firstName: "Tran",
    lastName: "Vu",
    age: 27
}

//Generics
// Type Parameter
// TModel[]
export abstract class BaseService<T> {
    protected model!: T;

    find(): T[] {
        return [this.model];
    }

    findOne(): T {
        return this.model;
    }
}

interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

export class DogService extends BaseService<Dog> {

}

export class CatService extends BaseService<Cat> {

}

const dogService = new DogService();
const catServece = new CatService();

dogService.findOne().bark();

catServece.findOne().meow();