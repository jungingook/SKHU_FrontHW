/*  1) personArray1.js

비어있는 persons 배열을 생성한다.
for 루프의 본문에서
persons 배열의 끝에 { name: "홍길동", age: 16 + i } 객체를 추가한다.
for 루프를 10번 반복한다.
persons 배열을 출력한다.

*/

//비어있는 persons 배열을 생성한다.
let persons = []

//persons 배열의 끝에 { name: "홍길동", age: 16 + i } 객체를 추가한다.
function arr (name, age){
    return {name, age}
}
//for 루프를 10번 반복한다.
for (let i = 0; i < 10; i++) {
    persons[i] = arr("홍길동",16+i)
}
//persons 배열을 출력한다.
console.log(persons)

/* 콘솔 : 
            [
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
*/