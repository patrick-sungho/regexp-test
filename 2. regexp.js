// 백틱기호는 엔터를 사용할 수 있음
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey-7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// g - 옵션으로 g를 작성하면 모든 데이터를 찾아줌
// i - 대문자, 소문자 구분하지 않겠다
// const regexp = new RegExp('the', 'gi')
const regexp = /the/gi

// 결과 값으로 처음으로 찾은 패턴을 출력함
console.log(str.match(regexp));


// method
// ※ = 자주 사용하는 메소드
// exec -> 정규식.exec(문자열) -> 일치하는 하나의 정보(Array) 반환
// ※ test -> 정규식.test(문자열) -> 일치 여부(Boolean) 반환
// ※ match -> 문자열.match(정규식) -> 일치하는 문자열의 배열(Array) 반환
// search -> 문자열.search(정규식) -> 일치하는 문자열의 인덱스(Number) 반환
// ※ replace -> 문자열.replace(정규식, 대체문자) -> 일치하는 문자열을 대체하고 대체된 문자열(String) 반환
// split -> 문자열.split(정규식) -> 일치하는 문자열을 분할하여 배열(Array)로 반환
// toString -> 생성자_정규식.toString() -> 생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)로 반환


