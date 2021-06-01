var roomList = ["봇테스트","연세대투자","연세대미주","연세대코인"]

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  if (roomList.indexOf(room) != -1){
  if (msg.indexOf("/코인") != -1) {
    var upbitBTC = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-BTC"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var BTCt = JSON.parse(upbitBTC)[0].trade_price;
    var BTC = commify(BTCt);

    var upbitETH = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-ETH"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var ETH = JSON.parse(upbitETH)[0].trade_price;
    var ETH = commify(ETH);

    var upbitLTC = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-LTC"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var LTC = JSON.parse(upbitLTC)[0].trade_price;
    var LTC = commify(LTC);

    var upbitXRP = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-XRP"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var XRP = JSON.parse(upbitXRP)[0].trade_price;
    var XRP = commify(XRP);

    var upbitBCH = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-BCH"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var BCH = JSON.parse(upbitBCH)[0].trade_price;
    var BCH = commify(BCH);

    var upbitLINK = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-LINK"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var LINK = JSON.parse(upbitLINK)[0].trade_price;
    var LINK = commify(LINK);

    var upbitDOT = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-DOT"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var DOT = JSON.parse(upbitDOT)[0].trade_price;
    var DOT = commify(DOT);

    var upbitTRX = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-TRX"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var TRX = JSON.parse(upbitTRX)[0].trade_price;

    var upbitADA = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-ADA"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var ADA = JSON.parse(upbitADA)[0].trade_price;
    var ADA = commify(ADA);


    var upbitOGN = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=BTC-OGN"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var OGN = JSON.parse(upbitOGN)[0].trade_price * BTCt;
    var OGN = OGN.toFixed(0);
    var OGN = commify(OGN);

    replier.reply(
      "실시간 업비트 기준\n\n" +
        "비트코인 : " +
        BTC +
        "원\n" +
        "이더리움 : " +
        ETH +
        "원\n" +
        "라코(디지털은) : " +
        LTC +
        "원\n" +
        "리플 : " +
        XRP +
        "원\n" +
        "비트코인캐시 : " +
        BCH +
        "원\n" +
        "체인링크 : " +
        LINK +
        "원\n" +
        "폴카닷 : " +
        DOT +
        "원\n" +
        "트론 : " +
        TRX +
        "원\n" +
        "에이다 : " +
        ADA +
        "원\n" +
        "오리진 : " +
        OGN +
        "원\n\n" +
        "라고할때살걸~"
    );
  }

  if (msg.indexOf("/비트") != -1) {
    var cmc = org.jsoup.Jsoup.connect("https://coinmarketcap.com/").get();
    var cmcDomi = cmc
      .select(
        "#__next > div > div.sc-1ojz83d-0.fLfsZi > div.sc-1l9306o-0.gjGEuR.cmc-header-mobile > div.sc-18ghxad-0.ifvooB > div > div.cmc-global-stats__content > div > span:nth-child(3) > a"
      )
      .text();

    var binanceBTC = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
    binanceBTC = JSON.parse(binanceBTC).price;
    binanceBTC = Number(binanceBTC.replace("\"",""));
    binanceBTC = commify(binanceBTC.toFixed(2));


    var upbitBTC = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-BTC"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var BTCt = JSON.parse(upbitBTC)[0].trade_price;
    var BTC = commify(BTCt);

    replier.reply(
      "실시간 비트코인 정보\n" +
        binanceBTC + "$" +
        "\n" +
        BTC +
        "원\n" +
        "비트코인 도미넌스 : " +
        cmcDomi
    );
  }
}

if (msg.indexOf("/김프") != -1) {

  var daumURL = org.jsoup.Jsoup.connect(
    "https://m.search.daum.net/search?w=tot&nil_mtopsearch=btn&DA=YZR&q=%EB%8B%AC%EB%9F%AC%ED%99%98%EC%9C%A8"
  ).get();

  var won = daumURL.select("#exchangeRateColl > div:nth-child(1) > div.main_rate > div > em").text();
  won = won.replace("\,","");

  var upbitURL = org.jsoup.Jsoup.connect(
    "https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-BCH,KRW-LTC,KRW-LINK,KRW-DOT,KRW-ADA,KRW-XRP,KRW-XLM,KRW-TRX"
  )
    .ignoreContentType(true)
    .ignoreHttpErrors(true)
    .userAgent("Mozilla")
    .get()
    .text();
  
  var upbitBTC = JSON.parse(upbitURL)[0].trade_price;
  var binanceBTC = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceBTC = JSON.parse(binanceBTC).price;
  binanceBTC = won*Number(binanceBTC.replace("\"",""));
  if (upbitBTC >= binanceBTC) {
    kpBTC = (upbitBTC/binanceBTC - 1) * 100;
  } else {
    kpBTC = (1- binanceBTC/upbitBTC) * 100;
  }
  kpBTC = kpBTC.toFixed(2);

  var upbitETH = JSON.parse(upbitURL)[1].trade_price;
  var binanceETH = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=ETHUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceETH = JSON.parse(binanceETH).price;
  binanceETH = won*Number(binanceETH.replace("\"",""));
  if (upbitETH >= binanceETH) {
    kpETH = (upbitETH/binanceETH - 1) * 100;
  } else {
    kpETH = (1- binanceETH/upbitETH) * 100;
  }
  kpETH = kpETH.toFixed(2);

  var upbitBCH = JSON.parse(upbitURL)[2].trade_price;
  var binanceBCH = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=BCHUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceBCH = JSON.parse(binanceBCH).price;
  binanceBCH = won*Number(binanceBCH.replace("\"",""));
  if (upbitBCH >= binanceBCH) {
    kpBCH = (upbitBCH/binanceBCH - 1) * 100;
  } else {
    kpBCH = (1- binanceBCH/upbitBCH) * 100;
  }
  kpBCH = kpBCH.toFixed(2);

  var upbitLTC = JSON.parse(upbitURL)[3].trade_price;
  var binanceLTC = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=LTCUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceLTC = JSON.parse(binanceLTC).price;
  binanceLTC = won*Number(binanceLTC.replace("\"",""));
  if (upbitLTC >= binanceLTC) {
    kpLTC = (upbitLTC/binanceLTC - 1) * 100;
  } else {
    kpLTC = (1- binanceLTC/upbitLTC) * 100;
  }
  kpLTC = kpLTC.toFixed(2);

  var upbitLINK = JSON.parse(upbitURL)[4].trade_price;
  var binanceLINK = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=LINKUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceLINK = JSON.parse(binanceLINK).price;
  binanceLINK = won*Number(binanceLINK.replace("\"",""));
  if (upbitLINK >= binanceLINK) {
    kpLINK = (upbitLINK/binanceLINK - 1) * 100;
  } else {
    kpLINK = (1- binanceLINK/upbitLINK) * 100;
  }
  kpLINK = kpLINK.toFixed(2);

  var upbitDOT = JSON.parse(upbitURL)[5].trade_price;
  var binanceDOT = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=DOTUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceDOT = JSON.parse(binanceDOT).price;
  binanceDOT = won*Number(binanceDOT.replace("\"",""));
  if (upbitDOT >= binanceDOT) {
    kpDOT = (upbitDOT/binanceDOT - 1) * 100;
  } else {
    kpDOT = (1- binanceDOT/upbitDOT) * 100;
  }
  kpDOT = kpDOT.toFixed(2);

  var upbitADA = JSON.parse(upbitURL)[6].trade_price;
  var binanceADA = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=ADAUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceADA = JSON.parse(binanceADA).price;
  binanceADA = won*Number(binanceADA.replace("\"",""));
  if (upbitADA >= binanceADA) {
    kpADA = (upbitADA/binanceADA - 1) * 100;
  } else {
    kpADA = (1- binanceADA/upbitADA) * 100;
  }
  kpADA = kpADA.toFixed(2);

  var upbitXRP = JSON.parse(upbitURL)[7].trade_price;
  var binanceXRP = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=XRPUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceXRP = JSON.parse(binanceXRP).price;
  binanceXRP = won*Number(binanceXRP.replace("\"",""));
  if (upbitXRP >= binanceXRP) {
    kpXRP = (upbitXRP/binanceXRP - 1) * 100;
  } else {
    kpXRP = (1- binanceXRP/upbitXRP) * 100;
  }
  kpXRP = kpXRP.toFixed(2);

  var upbitXLM = JSON.parse(upbitURL)[8].trade_price;
  var binanceXLM = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=XLMUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceXLM = JSON.parse(binanceXLM).price;
  binanceXLM = won*Number(binanceXLM.replace("\"",""));
  if (upbitXLM >= binanceXLM) {
    kpXLM = (upbitXLM/binanceXLM - 1) * 100;
  } else {
    kpXLM = (1- binanceXLM/upbitXLM) * 100;
  }
  kpXLM = kpXLM.toFixed(2);

  var upbitTRX = JSON.parse(upbitURL)[9].trade_price;
  var binanceTRX = org.jsoup.Jsoup.connect("https://api.binance.com/api/v1/ticker/price?symbol=TRXUSDT").ignoreContentType(true).ignoreHttpErrors(true).userAgent("Mozilla").get().text();
  binanceTRX = JSON.parse(binanceTRX).price;
  binanceTRX = won*Number(binanceTRX.replace("\"",""));
  if (upbitTRX >= binanceTRX) {
    kpTRX = (upbitTRX/binanceTRX - 1) * 100;
  } else {
    kpTRX = (1- binanceTRX/upbitTRX) * 100;
  }
  kpTRX = kpTRX.toFixed(2);


  replier.reply(
    "실시간 프리미엄 정보\n" +
    "업비트 - 바이낸스\n" +
    "BTC : " + kpBTC + "%\n" +
    "ETH : " + kpETH + "%\n" +
    "BCH : " + kpBCH + "%\n" +
    "LTC : " + kpLTC + "%\n" +
    "LINK : " + kpLINK + "%\n" +
    "DOT : " + kpDOT + "%\n" +
    "ADA : " + kpADA + "%\n" +
    "XRP : " + kpXRP + "%\n" +
    "XLM : " + kpXLM + "%\n" +
    "TRX : " + kpTRX + "%"

  );
}

}

function commify(n) {
  var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
  n += ""; // 숫자를 문자열로 변환

  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

  return n;
}
