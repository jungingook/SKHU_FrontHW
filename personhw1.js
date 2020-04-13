/* 1) personhw1.js
    let persons = [ 
        { name: "홍길동", age: 16 },
        { name: "임꺽정", age: 18 },
        { name: "전우치", age: 19 } 
    ];
배열을 age 내림차순으로 정렬하여 출력하는 코드를 구현하라.
*/

let persons = [
    {name: "홍길동 ", age: 16},
    {name: "임꺽정 ", age: 18},
    {name: "전우치 ", age: 19},
];

persons.sort((p1, p2) => p2.age - p1.age);
// 콜백 함수의 리턴 값을 기준으로 배열을 정렬한다.
// 테스트 결과 계산기 양수이거나 0이면 p1를 앞에 p2를 뒤에 배치하고 음수으면 p2를 앞에 p1을 뒤에 배치함

console.log(persons);

/* 출력 : 
    [
        { name: '전우치 ', age: 19 },
        { name: '임꺽정 ', age: 18 },
        { name: '홍길동 ', age: 16 }
    ]
*/