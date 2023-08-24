// 간단한 문자 검색부터 이메일, 패스워드, 문자 일치 기능등을 빠르게 수행
// 단, 정규식 패턴을 익혀야함

// 검색, 대체, 추출 가능

// 정규표현식 테스트 사이트
// https://regex101.com/
// https://regexr.com/ (추천)
// https://regexper.com/

// 정규표현식은 다양한 환경에서도 동작하는데, 서로 호환이 안될 수 있다! (테스트 필요)


// 생성자 함수 방식
const regexp1 = new RegExp("^abc");
// new RegExp(표현식)

const regexp2 = new RegExp("^abc", "gi");
//new RegExp(표현식, 플래그)


// 리터럴 방식
const regexp3 = /^abc/;
// /표현식/
// 슬래시 기호를 리터럴 방식으로 사용

const regexp4 = /^abc/gi;
// /표현식/플래그
// 슬래시 기호 다음에 옵션을 입력