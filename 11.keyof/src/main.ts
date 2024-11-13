//keyof 연산자
//제공된 타입의 키를 추출해 새로운 Union유형으로 반환
// interface의 약자 I

// interface IUser {
//     name: string;
//     age: number;
//     address: string;
// }

// type UserKeys = keyof IUser
// "name" | "age" | "address"


const user = {
    name: "John",
    age: 20,
    address: 'seoul'
}

type UserKeys = keyof typeof user
// 
enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole


type DeviceFormatter = {
    manufacturer?: string;
    price?: number;
}