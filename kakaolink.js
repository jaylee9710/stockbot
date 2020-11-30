const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();

Kakao.init('');//JavaScript 키 입력
Kakao.login('', ''); //자신의 이메일과 비번

function response (room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(room=="봇 테스트" && msg.startsWith("/시세 ")) {

    var stockReq = msg.substr(4)
    var naverURL = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EC%A3%BC%EA%B0%80"+stockReq).get();
    var stockName = naverURL.select("div.stock_tlt > strong").text();
    var stockCode = naverURL.select("div.stock_tlt > span").text();
    var stockCode = stockCode.split(" ")[0];
    var stockPrice = naverURL.select("div.stock_price > strong").text();
    var stockRate = naverURL.select("div.stock_price > span.price_gap > span").text();


    var stockChart = org.jsoup.Jsoup.connect("https://finance.naver.com/item/main.nhn?code=" + stockCode).get().select('div.chart').select('img').attr('src');
    if (stockReq != undefined) {
      
         Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": 41315, //템플릿
      "template_args": {
          "chart" : stockChart,
          "stockName" : stockName + "\n",
          "price" : stockPrice,
          "rate" : stockRate,
          "scode" : stockCode
      }
  }, "custom");
  
 
    }
  
  return;
  }
}
