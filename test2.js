// 1.khai báo mỗi kiểu dữ liệu 1 biến
let number = 1;
let string = 'asd';
let obj = {};
let arr = [];
let setTrue = true;
let setFalse = false;
let setUndefined = undefined;
let setNull = null;
let func = function a() {};

//2.
console.log('If trả về false khi kết quả = "undefined" hoặc "null" ');

//3.

const person = [
  {
    id: 1,
    name: 'nguyễn tuấn anh',
    age: 21,
  },
  {
    id: 2,
    name: 'đỗ văn hưng',
    age: 21,
  },
  {
    id: 3,
    name: 'đỗ đức huy',
    age: 26,
  },
  {
    id: 4,
    name: 'đỗ quý hải',
    age: 27,
  },
  {
    id: 5,
    name: 'trần đức trí',
    age: 21,
  },
];

// xóa phần tử 3 , 4 gốc

person.splice(3, 2);
console.log(person);

// update id 2 = new name ;

person[1].name = 'Nguyễn thị minh huệ';
console.log(person);

// 0969665911 bỏ hết số 9 = 3 lấy lại str ko chứa số 9

function sortStringNumber(stringNumber) {
  let newArr = [];
  let newArr2 = stringNumber.replaceAll('9', '3');
  console.log(newArr2);

  let stringNumberLength = stringNumber.length;
  let i = 0;
  for (i; i < stringNumberLength; i++) {
    if (stringNumber[i] !== '9') {
      newArr.push(stringNumber[i]);
      console.log(stringNumber[i]);
    }
  }
  let newArrJoin = newArr.join('');

  return `Remove 9 = 3  == ${newArr2}
  remove 9 == ${newArrJoin}
  `;
}

const test = sortStringNumber('0969665911');
console.log(test);
