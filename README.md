# 실습과제 #2 : 영화 데이터를 자바스크립트로
- 이름 / 학번 : 이재석 / 2651053
- 사이트 주소 : https://jabcho7.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 YYYY-MM-DD)
## 구현 항목 체크
- [ ] Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로
계산한 A1~A5 다섯 줄이 콘솔에 찍힘.
- [ ] Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search,
formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과.
- [ ] Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로
C1, C2, 상위 5편 표, C4가 콘솔에 찍힘
- [ ]  출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 <pre id="out">에 Part B
요약 3줄(textContent 한 번).
- [ ] 코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본
그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름. 
- [ ]  제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI
기록, 어느 파일에도 API 키 없음. 
## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기)
| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' | '1234567' |
| 2 | average(movies).toFixed(1) | 7.3 | 7.3 |
| 3 | best(movies).title | '극장판 치이카와: 인어섬의 비밀' | '극장판 치이카와: 인어섬의 비밀' |
| 4 | sortBy(movies, "ratings", true)[0].title | '극장판 치이카와: 인어섬의 비밀' | '극장판 치이카와: 인어섬의 비밀'|
| 5 | filterByRating(movies, 8).length | 0 | 0 |
| 6 | search(movies, "인어").length | 1 | 1 |
| 7 | yearsSince("2014-11-06") | 12 | 12 |
| 8 | movies[0].title | 투모로우 | 투모로우 |
## 어려웠던 점 3가지와 해결
과제 안내에 설명을 이해하는데 조금 시간이 걸림, 아는 개념과 함께 정리하며 이해
함수를 만들때 방법이 3개라 이것들끼리 조금 헷갈림, 수업시간 필기 정리 보며 해결
코드 사이에 ratings를 rating으로 잘못 써 오류가 발생, 찾아서 수정으로 해결
## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
교재 및 이전 수업에서 작성했던 코드 참고
## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 : 없음
- 답변 요약 : 없음
- 채택 여부 : 없음
