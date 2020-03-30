/* 1) sort.js
다음 기능을 구현하시오.

(1) 빈 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열의 오름차순으로 정렬한다.
(4) 배열을 출력한다.
*/

// (1) 빈 배열을 만든다.
let arr = [];

// (2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
for (let i = 0; i < 100 ; i++) {
    arr[i] = Math.floor(Math.random() * (100) + 1);
}

// (3) 배열의 오름차순으로 정렬한다.
arr.sort(function(a, b) { // 오름차순
    return a - b;
});

// (4) 배열을 출력한다.
for (let i = 0; i < arr.length ; i=i+10) {
    let print =""
    for (let j = 0; j < 10; j++) {
        if (arr[i+j] == undefined){
            break;
        } 
        print += "["+ arr[i+j] + "] ";
    }
      console.log(print);
}
console.log("출력된 배열의 길이 :",arr.length);

/* 콘솔 : 
        [0] [0] [3] [3] [3] [6] [6] [7] [7] [8] 
        [9] [9] [10] [11] [13] [14] [15] [15] [15] [16] 
        [18] [19] [19] [20] [23] [23] [25] [26] [27] [30] 
        [32] [33] [34] [34] [34] [35] [36] [38] [39] [40] 
        [40] [40] [40] [41] [41] [44] [44] [46] [47] [48] 
        [49] [49] [50] [51] [52] [53] [55] [55] [55] [58] 
        [58] [60] [61] [62] [63] [63] [65] [65] [65] [66] 
        [66] [66] [67] [70] [70] [73] [73] [73] [75] [75] 
        [75] [77] [78] [79] [79] [80] [81] [82] [83] [86] 
        [87] [88] [88] [90] [91] [93] [93] [94] [95] [98] 
        출력된 배열의 길이 : 100
*/