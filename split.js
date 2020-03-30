/* 3) 쪼개기 (split.js)

위 문제의 문자열에서 공백을 기준으로 문자열을 쪼개서, 문자열 배열을 만들고,

그 배열을 출력하시오.
*/

let text = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

let arr = text.split(" ");

for (let i = 0; i < arr.length; i++) {
    console.log(i,"번위치의 배열 [",arr[i],"]")
}

/* 콘솔 : 
        0 번위치의 배열 [ When ]
        1 번위치의 배열 [ I ]
        2 번위치의 배열 [ find ]
        3 번위치의 배열 [ myself ]
        4 번위치의 배열 [ in ]
        5 번위치의 배열 [ times ]
        6 번위치의 배열 [ of ]
        7 번위치의 배열 [ trouble ]
        8 번위치의 배열 [ Mother ]
        9 번위치의 배열 [ Mary ]
        10 번위치의 배열 [ comes ]
        11 번위치의 배열 [ to ]
        12 번위치의 배열 [ me ]
        13 번위치의 배열 [ Speaking ]
        14 번위치의 배열 [ words ]
        15 번위치의 배열 [ of ]
        16 번위치의 배열 [ wisdom, ]
        17 번위치의 배열 [ let ]
        18 번위치의 배열 [ it ]
        19 번위치의 배열 [ be. ]
*/