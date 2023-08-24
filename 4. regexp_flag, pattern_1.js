// flag, pattern

let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey-7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const h = ` the hello  world  !

`

// \ 이스케이프 문자 (본래의 기능을 벗어나 상태가 바뀌는 문자)
// .은 하나의 기능이 있다.
// $은 앞에 단어로 끝나는 부분을 일치
// 문자 데이터의 가장 끝 부분에 .이 없기 때문에 null이 뜨는데 m을 입력하면 각 줄에 대해 확인

// 전체영역 g, m 줄바꿈이 되어있는 각각 줄을 해석
console.log(
  // dog|fox 순서를 바꿔도 먼저 찾아지는 것을 먼저 반환
  // ? = 앞에 한글자가 있을 수도 있고 없을 수도 있다
  // \w = 숫자, 영어 알파벳에 해당
  // \b = 숫자, 영어 알파벳이 아닌 부분에 경계를 만들어줌
  // [fox] = f 또는 o 또는 x 를 찾는다
  h.replace(/\s/g, '')
)

