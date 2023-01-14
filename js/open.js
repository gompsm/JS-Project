const text1 = document.querySelector('#text1');


// 경기도 축구장 지역 좌표 가져옴 
const URL = 'https://openapi.gg.go.kr/PublicTrainingFacilitySoccer?KEY=8a290b0ff1194294b392beff3ab0b325&Type=json&pindex=1&psize=100';


let ha = fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data.PublicTrainingFacilitySoccer[1].row[0]));


const li = document.querySelector('li');

