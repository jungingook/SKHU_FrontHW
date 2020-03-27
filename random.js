/*
2) random.js

10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오.
*/
for (let i=0;i<=30;i++) {
    // console.log(Math.floor(Math.random()* 10)+10) 
    console.log(Math.floor(Math.random()* (20-10+1))+10)
}
/*
    중요 : 랜덤값이 포함되어 있으므로 결과값은 상황에 따라 각기 다름
    콘솔 :
            11
            11
            19
            18
            28
            19
            15
            23
            26
            26
            17
*/
