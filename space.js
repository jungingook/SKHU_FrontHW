/* 2) 공백 제거 (space.js)

위 문제의 문자열에서 공백을 모두 제거한 새 문자열을 만들고,

그 문자열을 출력하시오.
*/

let text = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let space = "";
while(text.indexOf(" ")!= -1){
    space = space + text.slice(0,text.indexOf(" "))
    text = text.slice(text.indexOf(" ")+1) 
}
space = space + text;
console.log(space); 

// 출력 : WhenIfindmyselfintimesoftroubleMotherMarycomestomeSpeakingwordsofwisdom,letitbe. 
