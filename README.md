# Watchdogs: naw

## Nation Assemply Watcher: Server repo

### API: Endpoints

ec2-13-209-40-96.ap-northeast-2.compute.amazonaws.com:3000
GET /mna/:id
```javascript
{
    "id": 3,
    "name": "김관영",
    "chinesename": "金寬永",
    "photo": "http://www.assembly.go.kr/photo/9770713.jpg",
    "party_id": 3,
    "local": "전북 군산시",
    "stdcomt": "국회운영위원회, 산업통상자원중소벤처기업위원회, 정보위원회",
    "phone": "02-784-1781",
    "address": "의원회관 507호",
    "fax": "02-788-0116",
    "blog": "http://usekky.com/",
    "twtr": "https://twitter.com/usekky",
    "fb": "https://www.facebook.com/usekky",
    "rateForCongress": 0.4,
    "rateForStandingCongress": 0.5
}
```

### HOW TO RUN


먼저 `config.json`에서 다룰 테이블 명을 정해줍니다. 새로 적으셔도 되나, 해당 이름의 테이블을 미리 만드셔야 합니다. DROP -> CREATE -> INSERT 순으로 진행됩니다.

```bash
$ yarn db:test:reset
```


