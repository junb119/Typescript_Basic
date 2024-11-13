// implements vs extends

class Car {
  mileage = 0;
  price = 100;
  color = "white";

  drive() {
    return "drive!";
  }

  brake() {
    return "brake!";
  }
}

interface Part {
  seats: number;
  tire: number;
}
// implements
// 새로운 클래스의 타입 체크를 위해 사용, 클래스의 모양을 정의할 때 사용(부모 클래스의 프로퍼티와 메소드를 상속받는게 아님)
// extends와 달리 부모클래스의 속성을 적어줘야함
class Ford implements Car, Part {
  mileage = 1;
  price = 2;
  color = "white";
  seats = 2;
  tire = 3;

  drive() {
    return "drive!";
  }

  brake() {
    return "brake!";
  }
}

const myFordCar = new Ford();

const user = {
  name: "john",
  age: 20,
  address: "seoul",
};

type UserKeys = keyof typeof user;
