/*1) 모음 위치 (vowel.js)

"When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.
*/

var text = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

var pointer = 0;
var loop =0;
var vowel = text.search(/[aeiouAEIOU]/)
while(vowel != -1) { 
    pointer = pointer+vowel+1;
    text = text.slice(vowel+1);
    loop++;
    console.log(loop,"번째 '모음' [",pointer,"]번째 문자에 위치합니다.  남은문자열 :",text)
    vowel = text.search(/[aeiouAEIOU]/)
}
console.log(" ===== 모든 문자열에서 모음을 찾았습니다 =====")

/* 출력 : 
        1 번째 '모음' [ 3 ]번째 문자에 위치합니다.  남은문자열 : n I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        2 번째 '모음' [ 6 ]번째 문자에 위치합니다.  남은문자열 :  find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        3 번째 '모음' [ 9 ]번째 문자에 위치합니다.  남은문자열 : nd myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        4 번째 '모음' [ 16 ]번째 문자에 위치합니다.  남은문자열 : lf in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        5 번째 '모음' [ 20 ]번째 문자에 위치합니다.  남은문자열 : n times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        6 번째 '모음' [ 24 ]번째 문자에 위치합니다.  남은문자열 : mes of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        7 번째 '모음' [ 26 ]번째 문자에 위치합니다.  남은문자열 : s of trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        8 번째 '모음' [ 29 ]번째 문자에 위치합니다.  남은문자열 : f trouble Mother Mary comes to me Speaking words of wisdom, let it be.
        9 번째 '모음' [ 34 ]번째 문자에 위치합니다.  남은문자열 : uble Mother Mary comes to me Speaking words of wisdom, let it be.
        10 번째 '모음' [ 35 ]번째 문자에 위치합니다.  남은문자열 : ble Mother Mary comes to me Speaking words of wisdom, let it be.
        11 번째 '모음' [ 38 ]번째 문자에 위치합니다.  남은문자열 :  Mother Mary comes to me Speaking words of wisdom, let it be.
        12 번째 '모음' [ 41 ]번째 문자에 위치합니다.  남은문자열 : ther Mary comes to me Speaking words of wisdom, let it be.
        13 번째 '모음' [ 44 ]번째 문자에 위치합니다.  남은문자열 : r Mary comes to me Speaking words of wisdom, let it be.
        14 번째 '모음' [ 48 ]번째 문자에 위치합니다.  남은문자열 : ry comes to me Speaking words of wisdom, let it be.
        15 번째 '모음' [ 53 ]번째 문자에 위치합니다.  남은문자열 : mes to me Speaking words of wisdom, let it be.
        16 번째 '모음' [ 55 ]번째 문자에 위치합니다.  남은문자열 : s to me Speaking words of wisdom, let it be.
        17 번째 '모음' [ 59 ]번째 문자에 위치합니다.  남은문자열 :  me Speaking words of wisdom, let it be.
        18 번째 '모음' [ 62 ]번째 문자에 위치합니다.  남은문자열 :  Speaking words of wisdom, let it be.
        19 번째 '모음' [ 66 ]번째 문자에 위치합니다.  남은문자열 : aking words of wisdom, let it be.
        20 번째 '모음' [ 67 ]번째 문자에 위치합니다.  남은문자열 : king words of wisdom, let it be.
        21 번째 '모음' [ 69 ]번째 문자에 위치합니다.  남은문자열 : ng words of wisdom, let it be.
        22 번째 '모음' [ 74 ]번째 문자에 위치합니다.  남은문자열 : rds of wisdom, let it be.
        23 번째 '모음' [ 79 ]번째 문자에 위치합니다.  남은문자열 : f wisdom, let it be.
        24 번째 '모음' [ 83 ]번째 문자에 위치합니다.  남은문자열 : sdom, let it be.
        25 번째 '모음' [ 86 ]번째 문자에 위치합니다.  남은문자열 : m, let it be.
        26 번째 '모음' [ 91 ]번째 문자에 위치합니다.  남은문자열 : t it be.
        27 번째 '모음' [ 94 ]번째 문자에 위치합니다.  남은문자열 : t be.
        28 번째 '모음' [ 98 ]번째 문자에 위치합니다.  남은문자열 : .
        ===== 모든 문자열에서 모음을 찾았습니다 =====
*/