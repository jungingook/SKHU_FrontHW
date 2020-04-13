/* 2) personhw2.js
    let persons = [ 
        { name: "홍길동", age: 16 },
        { name: "임꺽정", age: 18 },
        { name: "전우치", age: 19 } 
    ];
위 persons 배열에서 age 최대값 사람을 찾아서 출력하는 코드를 구현하라.
reduce 메소드를 사용하여 구현하라
*/

let persons = [
    {name: "홍길동 ", age: 16},
    {name: "임꺽정 ", age: 18},
    {name: "전우치 ", age: 19},
];

let old = persons.reduce((p1, p2) => p1>p2? p1:p2 );

// reduce 함수는 첫번째 매개변수와 두번째 매개변수를 연산후 연산 결과값을 가지고 있다. 그 연산 결과값은 p1로 다시 들어가서 다시 연산된다.
// !!활용하기에 정말 머리아플 함수라 연습이 필요함.

console.log(old.name+"가 "+old.age+"살로 나이가 가장 많습니다.");

/* 출력 : 
    전우치 가 19살로 나이가 가장 많습니다.
*/