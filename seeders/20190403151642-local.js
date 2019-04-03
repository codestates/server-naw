"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "LOCAL",
      [
        {
          LOCAL_NAME: "강원 강릉시"
        },
        {
          LOCAL_NAME: "강원 동해시삼척시"
        },
        {
          LOCAL_NAME: "강원 속초시고성군양양군"
        },
        {
          LOCAL_NAME: "강원 원주시갑"
        },
        {
          LOCAL_NAME: "강원 원주시을"
        },
        {
          LOCAL_NAME: "강원 춘천시"
        },
        {
          LOCAL_NAME: "강원 태백시횡성군영월군평창군정선군"
        },
        {
          LOCAL_NAME: "강원 홍천군철원군화천군양구군인제군"
        },
        {
          LOCAL_NAME: "경기 고양시갑"
        },
        {
          LOCAL_NAME: "경기 고양시병"
        },
        {
          LOCAL_NAME: "경기 고양시을"
        },
        {
          LOCAL_NAME: "경기 고양시정"
        },
        {
          LOCAL_NAME: "경기 광명시갑"
        },
        {
          LOCAL_NAME: "경기 광명시을"
        },
        {
          LOCAL_NAME: "경기 광주시갑"
        },
        {
          LOCAL_NAME: "경기 광주시을"
        },
        {
          LOCAL_NAME: "경기 구리시"
        },
        {
          LOCAL_NAME: "경기 군포시갑"
        },
        {
          LOCAL_NAME: "경기 군포시을"
        },
        {
          LOCAL_NAME: "경기 김포시갑"
        },
        {
          LOCAL_NAME: "경기 김포시을"
        },
        {
          LOCAL_NAME: "경기 남양주시갑"
        },
        {
          LOCAL_NAME: "경기 남양주시병"
        },
        {
          LOCAL_NAME: "경기 남양주시을"
        },
        {
          LOCAL_NAME: "경기 동두천시연천군"
        },
        {
          LOCAL_NAME: "경기 부천시소사구"
        },
        {
          LOCAL_NAME: "경기 부천시오정구"
        },
        {
          LOCAL_NAME: "경기 부천시원미구갑"
        },
        {
          LOCAL_NAME: "경기 부천시원미구을"
        },
        {
          LOCAL_NAME: "경기 성남시분당구갑"
        },
        {
          LOCAL_NAME: "경기 성남시분당구을"
        },
        {
          LOCAL_NAME: "경기 성남시수정구"
        },
        {
          LOCAL_NAME: "경기 성남시중원구"
        },
        {
          LOCAL_NAME: "경기 수원시갑"
        },
        {
          LOCAL_NAME: "경기 수원시무"
        },
        {
          LOCAL_NAME: "경기 수원시병"
        },
        {
          LOCAL_NAME: "경기 수원시을"
        },
        {
          LOCAL_NAME: "경기 수원시정"
        },
        {
          LOCAL_NAME: "경기 시흥시갑"
        },
        {
          LOCAL_NAME: "경기 시흥시을"
        },
        {
          LOCAL_NAME: "경기 안산시단원구갑"
        },
        {
          LOCAL_NAME: "경기 안산시단원구을"
        },
        {
          LOCAL_NAME: "경기 안산시상록구갑"
        },
        {
          LOCAL_NAME: "경기 안산시상록구을"
        },
        {
          LOCAL_NAME: "경기 안성시"
        },
        {
          LOCAL_NAME: "경기 안양시동안구갑"
        },
        {
          LOCAL_NAME: "경기 안양시동안구을"
        },
        {
          LOCAL_NAME: "경기 안양시만안구"
        },
        {
          LOCAL_NAME: "경기 양주시"
        },
        {
          LOCAL_NAME: "경기 여주시양평군"
        },
        {
          LOCAL_NAME: "경기 오산시"
        },
        {
          LOCAL_NAME: "경기 용인시갑"
        },
        {
          LOCAL_NAME: "경기 용인시병"
        },
        {
          LOCAL_NAME: "경기 용인시을"
        },
        {
          LOCAL_NAME: "경기 용인시정"
        },
        {
          LOCAL_NAME: "경기 의왕시과천시"
        },
        {
          LOCAL_NAME: "경기 의정부시갑"
        },
        {
          LOCAL_NAME: "경기 의정부시을"
        },
        {
          LOCAL_NAME: "경기 이천시"
        },
        {
          LOCAL_NAME: "경기 파주시갑"
        },
        {
          LOCAL_NAME: "경기 파주시을"
        },
        {
          LOCAL_NAME: "경기 평택시갑"
        },
        {
          LOCAL_NAME: "경기 평택시을"
        },
        {
          LOCAL_NAME: "경기 포천시가평군"
        },
        {
          LOCAL_NAME: "경기 하남시"
        },
        {
          LOCAL_NAME: "경기 화성시갑"
        },
        {
          LOCAL_NAME: "경기 화성시병"
        },
        {
          LOCAL_NAME: "경기 화성시을"
        },
        {
          LOCAL_NAME: "경남 거제시"
        },
        {
          LOCAL_NAME: "경남 김해시갑"
        },
        {
          LOCAL_NAME: "경남 김해시을"
        },
        {
          LOCAL_NAME: "경남 밀양시의령군함안군창녕군"
        },
        {
          LOCAL_NAME: "경남 사천시남해군하동군"
        },
        {
          LOCAL_NAME: "경남 산청군함양군거창군합천군"
        },
        {
          LOCAL_NAME: "경남 양산시갑"
        },
        {
          LOCAL_NAME: "경남 양산시을"
        },
        {
          LOCAL_NAME: "경남 진주시갑"
        },
        {
          LOCAL_NAME: "경남 진주시을"
        },
        {
          LOCAL_NAME: "경남 창원시마산합포구"
        },
        {
          LOCAL_NAME: "경남 창원시마산회원구"
        },
        {
          LOCAL_NAME: "경남 창원시의창구"
        },
        {
          LOCAL_NAME: "경남 창원시진해구"
        },
        {
          LOCAL_NAME: "경남 통영시고성군"
        },
        {
          LOCAL_NAME: "경북 경산시"
        },
        {
          LOCAL_NAME: "경북 경주시"
        },
        {
          LOCAL_NAME: "경북 고령군성주군칠곡군"
        },
        {
          LOCAL_NAME: "경북 구미시갑"
        },
        {
          LOCAL_NAME: "경북 구미시을"
        },
        {
          LOCAL_NAME: "경북 김천시"
        },
        {
          LOCAL_NAME: "경북 상주시군위군의성군청송군"
        },
        {
          LOCAL_NAME: "경북 안동시"
        },
        {
          LOCAL_NAME: "경북 영양군영덕군봉화군울진군"
        },
        {
          LOCAL_NAME: "경북 영주시문경시예천군"
        },
        {
          LOCAL_NAME: "경북 영천시청도군"
        },
        {
          LOCAL_NAME: "경북 포항시남구울릉군"
        },
        {
          LOCAL_NAME: "경북 포항시북구"
        },
        {
          LOCAL_NAME: "광주 광산구갑"
        },
        {
          LOCAL_NAME: "광주 광산구을"
        },
        {
          LOCAL_NAME: "광주 동구남구갑"
        },
        {
          LOCAL_NAME: "광주 동구남구을"
        },
        {
          LOCAL_NAME: "광주 북구갑"
        },
        {
          LOCAL_NAME: "광주 북구을"
        },
        {
          LOCAL_NAME: "광주 서구갑"
        },
        {
          LOCAL_NAME: "광주 서구을"
        },
        {
          LOCAL_NAME: "대구 달서구갑"
        },
        {
          LOCAL_NAME: "대구 달서구병"
        },
        {
          LOCAL_NAME: "대구 달서구을"
        },
        {
          LOCAL_NAME: "대구 달성군"
        },
        {
          LOCAL_NAME: "대구 동구갑"
        },
        {
          LOCAL_NAME: "대구 동구을"
        },
        {
          LOCAL_NAME: "대구 북구갑"
        },
        {
          LOCAL_NAME: "대구 북구을"
        },
        {
          LOCAL_NAME: "대구 서구"
        },
        {
          LOCAL_NAME: "대구 수성구갑"
        },
        {
          LOCAL_NAME: "대구 수성구을"
        },
        {
          LOCAL_NAME: "대구 중구남구"
        },
        {
          LOCAL_NAME: "대전 대덕구"
        },
        {
          LOCAL_NAME: "대전 동구"
        },
        {
          LOCAL_NAME: "대전 서구갑"
        },
        {
          LOCAL_NAME: "대전 서구을"
        },
        {
          LOCAL_NAME: "대전 유성구갑"
        },
        {
          LOCAL_NAME: "대전 유성구을"
        },
        {
          LOCAL_NAME: "대전 중구"
        },
        {
          LOCAL_NAME: "부산 금정구"
        },
        {
          LOCAL_NAME: "부산 기장군"
        },
        {
          LOCAL_NAME: "부산 남구갑"
        },
        {
          LOCAL_NAME: "부산 남구을"
        },
        {
          LOCAL_NAME: "부산 동래구"
        },
        {
          LOCAL_NAME: "부산 부산진구갑"
        },
        {
          LOCAL_NAME: "부산 부산진구을"
        },
        {
          LOCAL_NAME: "부산 북구강서구갑"
        },
        {
          LOCAL_NAME: "부산 북구강서구을"
        },
        {
          LOCAL_NAME: "부산 사상구"
        },
        {
          LOCAL_NAME: "부산 사하구갑"
        },
        {
          LOCAL_NAME: "부산 사하구을"
        },
        {
          LOCAL_NAME: "부산 서구동구"
        },
        {
          LOCAL_NAME: "부산 수영구"
        },
        {
          LOCAL_NAME: "부산 연제구"
        },
        {
          LOCAL_NAME: "부산 중구영도구"
        },
        {
          LOCAL_NAME: "부산 해운대구갑"
        },
        {
          LOCAL_NAME: "부산 해운대구을"
        },
        {
          LOCAL_NAME: "비례대표"
        },
        {
          LOCAL_NAME: "서울 강남구갑"
        },
        {
          LOCAL_NAME: "서울 강남구병"
        },
        {
          LOCAL_NAME: "서울 강남구을"
        },
        {
          LOCAL_NAME: "서울 강동구갑"
        },
        {
          LOCAL_NAME: "서울 강동구을"
        },
        {
          LOCAL_NAME: "서울 강북구갑"
        },
        {
          LOCAL_NAME: "서울 강북구을"
        },
        {
          LOCAL_NAME: "서울 강서구갑"
        },
        {
          LOCAL_NAME: "서울 강서구병"
        },
        {
          LOCAL_NAME: "서울 강서구을"
        },
        {
          LOCAL_NAME: "서울 관악구갑"
        },
        {
          LOCAL_NAME: "서울 관악구을"
        },
        {
          LOCAL_NAME: "서울 광진구갑"
        },
        {
          LOCAL_NAME: "서울 광진구을"
        },
        {
          LOCAL_NAME: "서울 구로구갑"
        },
        {
          LOCAL_NAME: "서울 구로구을"
        },
        {
          LOCAL_NAME: "서울 금천구"
        },
        {
          LOCAL_NAME: "서울 노원구갑"
        },
        {
          LOCAL_NAME: "서울 노원구병"
        },
        {
          LOCAL_NAME: "서울 노원구을"
        },
        {
          LOCAL_NAME: "서울 도봉구갑"
        },
        {
          LOCAL_NAME: "서울 도봉구을"
        },
        {
          LOCAL_NAME: "서울 동대문구갑"
        },
        {
          LOCAL_NAME: "서울 동대문구을"
        },
        {
          LOCAL_NAME: "서울 동작구갑"
        },
        {
          LOCAL_NAME: "서울 동작구을"
        },
        {
          LOCAL_NAME: "서울 마포구갑"
        },
        {
          LOCAL_NAME: "서울 마포구을"
        },
        {
          LOCAL_NAME: "서울 서대문구갑"
        },
        {
          LOCAL_NAME: "서울 서대문구을"
        },
        {
          LOCAL_NAME: "서울 서초구갑"
        },
        {
          LOCAL_NAME: "서울 서초구을"
        },
        {
          LOCAL_NAME: "서울 성북구갑"
        },
        {
          LOCAL_NAME: "서울 성북구을"
        },
        {
          LOCAL_NAME: "서울 송파구갑"
        },
        {
          LOCAL_NAME: "서울 송파구병"
        },
        {
          LOCAL_NAME: "서울 송파구을"
        },
        {
          LOCAL_NAME: "서울 양천구갑"
        },
        {
          LOCAL_NAME: "서울 양천구을"
        },
        {
          LOCAL_NAME: "서울 영등포구갑"
        },
        {
          LOCAL_NAME: "서울 영등포구을"
        },
        {
          LOCAL_NAME: "서울 용산구"
        },
        {
          LOCAL_NAME: "서울 은평구갑"
        },
        {
          LOCAL_NAME: "서울 은평구을"
        },
        {
          LOCAL_NAME: "서울 종로구"
        },
        {
          LOCAL_NAME: "서울 중구성동구갑"
        },
        {
          LOCAL_NAME: "서울 중구성동구을"
        },
        {
          LOCAL_NAME: "서울 중랑구갑"
        },
        {
          LOCAL_NAME: "서울 중랑구을"
        },
        {
          LOCAL_NAME: "세종특별자치시"
        },
        {
          LOCAL_NAME: "울산 남구갑"
        },
        {
          LOCAL_NAME: "울산 남구을"
        },
        {
          LOCAL_NAME: "울산 동구"
        },
        {
          LOCAL_NAME: "울산 북구"
        },
        {
          LOCAL_NAME: "울산 울주군"
        },
        {
          LOCAL_NAME: "울산 중구"
        },
        {
          LOCAL_NAME: "인천 계양구갑"
        },
        {
          LOCAL_NAME: "인천 계양구을"
        },
        {
          LOCAL_NAME: "인천 남동구갑"
        },
        {
          LOCAL_NAME: "인천 남동구을"
        },
        {
          LOCAL_NAME: "인천 미추홀구갑"
        },
        {
          LOCAL_NAME: "인천 미추홀구을"
        },
        {
          LOCAL_NAME: "인천 부평구갑"
        },
        {
          LOCAL_NAME: "인천 부평구을"
        },
        {
          LOCAL_NAME: "인천 서구갑"
        },
        {
          LOCAL_NAME: "인천 서구을"
        },
        {
          LOCAL_NAME: "인천 연수구갑"
        },
        {
          LOCAL_NAME: "인천 연수구을"
        },
        {
          LOCAL_NAME: "인천 중구동구강화군옹진군"
        },
        {
          LOCAL_NAME: "전남 고흥군보성군장흥군강진군"
        },
        {
          LOCAL_NAME: "전남 광양시곡성군구례군"
        },
        {
          LOCAL_NAME: "전남 나주시화순군"
        },
        {
          LOCAL_NAME: "전남 담양군함평군영광군장성군"
        },
        {
          LOCAL_NAME: "전남 목포시"
        },
        {
          LOCAL_NAME: "전남 순천시"
        },
        {
          LOCAL_NAME: "전남 여수시갑"
        },
        {
          LOCAL_NAME: "전남 여수시을"
        },
        {
          LOCAL_NAME: "전남 영암군무안군신안군"
        },
        {
          LOCAL_NAME: "전남 해남군완도군진도군"
        },
        {
          LOCAL_NAME: "전북 군산시"
        },
        {
          LOCAL_NAME: "전북 김제시부안군"
        },
        {
          LOCAL_NAME: "전북 남원시임실군순창군"
        },
        {
          LOCAL_NAME: "전북 완주군진안군무주군장수군"
        },
        {
          LOCAL_NAME: "전북 익산시갑"
        },
        {
          LOCAL_NAME: "전북 익산시을"
        },
        {
          LOCAL_NAME: "전북 전주시갑"
        },
        {
          LOCAL_NAME: "전북 전주시병"
        },
        {
          LOCAL_NAME: "전북 전주시을"
        },
        {
          LOCAL_NAME: "전북 정읍시고창군"
        },
        {
          LOCAL_NAME: "제주 서귀포시"
        },
        {
          LOCAL_NAME: "제주 제주시갑"
        },
        {
          LOCAL_NAME: "제주 제주시을"
        },
        {
          LOCAL_NAME: "충남 공주시부여군청양군"
        },
        {
          LOCAL_NAME: "충남 논산시계룡시금산군"
        },
        {
          LOCAL_NAME: "충남 당진시"
        },
        {
          LOCAL_NAME: "충남 보령시서천군"
        },
        {
          LOCAL_NAME: "충남 서산시태안군"
        },
        {
          LOCAL_NAME: "충남 아산시갑"
        },
        {
          LOCAL_NAME: "충남 아산시을"
        },
        {
          LOCAL_NAME: "충남 천안시갑"
        },
        {
          LOCAL_NAME: "충남 천안시병"
        },
        {
          LOCAL_NAME: "충남 천안시을"
        },
        {
          LOCAL_NAME: "충남 홍성군예산군"
        },
        {
          LOCAL_NAME: "충북 보은군옥천군영동군괴산군"
        },
        {
          LOCAL_NAME: "충북 제천시단양군"
        },
        {
          LOCAL_NAME: "충북 증평군진천군음성군"
        },
        {
          LOCAL_NAME: "충북 청주시상당구"
        },
        {
          LOCAL_NAME: "충북 청주시서원구"
        },
        {
          LOCAL_NAME: "충북 청주시청원구"
        },
        {
          LOCAL_NAME: "충북 청주시흥덕구"
        },
        {
          LOCAL_NAME: "충북 충주시"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
