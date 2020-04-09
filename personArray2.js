/*  2) personArray2.js

personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
persons1 배열을 복제해서 persons2 배열을 생성한다.
persons2 배열을 새로 배열을 만들어서, persons1 배열의 값들을 복사.
deep copy가 되도록 복제해야 한다.
즉 배열만 복제 되는 것이 아니고, 배열이 참조하는 객체들도 복제 되어야 한다.
persons2 배열을 출력한다.
*/

//personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
let persons1 = []
let persons2 = []


function arr (name, age){
    return {name, age}
}
for (let i = 0; i < 10; i++) {
    persons1[i] = arr("홍길동",16+i)
    persons2[i] = Object.assign({ }, persons1[i]);
}

console.log("persons1 배열 :",persons1)
console.log("persons2 배열 :",persons2)

console.log("두 배열이 같은 주소를 참조하는가? :",persons2==persons1)
console.log("배열안의 객체가 같은 주소를 참조하는가? :",persons2[0]==persons1[0])

/* 콘솔 : 
        persons1 배열 : [
        { name: '홍길동', age: 16 },
        { name: '홍길동', age: 17 },
        { name: '홍길동', age: 18 },
        { name: '홍길동', age: 19 },
        { name: '홍길동', age: 20 },
        { name: '홍길동', age: 21 },
        { name: '홍길동', age: 22 },
        { name: '홍길동', age: 23 },
        { name: '홍길동', age: 24 },
        { name: '홍길동', age: 25 }
        ]
        persons2 배열 : [
        { name: '홍길동', age: 16 },
        { name: '홍길동', age: 17 },
        { name: '홍길동', age: 18 },
        { name: '홍길동', age: 19 },
        { name: '홍길동', age: 20 },
        { name: '홍길동', age: 21 },
        { name: '홍길동', age: 22 },
        { name: '홍길동', age: 23 },
        { name: '홍길동', age: 24 },
        { name: '홍길동', age: 25 }
        ]
        두 배열이 같은 주소를 참조하는가? :  false
        배열안의 객체가 같은 주소를 참조하는가? :  false
*/