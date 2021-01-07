function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
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

    var upbitEOS = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-EOS"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var EOS = JSON.parse(upbitEOS)[0].trade_price;
    var EOS = commify(EOS);

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

    var upbitSNT = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=KRW-SNT"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var SNT = JSON.parse(upbitSNT)[0].trade_price;
    var SNT = commify(SNT);

    var upbitLUNA = org.jsoup.Jsoup.connect(
      "https://api.upbit.com/v1/ticker?markets=BTC-LUNA"
    )
      .ignoreContentType(true)
      .ignoreHttpErrors(true)
      .userAgent("Mozilla")
      .get()
      .text();
    var LUNA = JSON.parse(upbitLUNA)[0].trade_price * BTCt;
    var LUNA = LUNA.toFixed(0);
    var LUNA = commify(LUNA);

    replier.reply(
      "실시간 업비트 기준\n\n" +
        "비트코인 : " +
        BTC +
        "원\n" +
        "이더리움 : " +
        ETH +
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
        "이오스(뽀삐) : " +
        EOS +
        "원\n" +
        "트론 : " +
        TRX +
        "원\n" +
        "에이다 : " +
        ADA +
        "원\n" +
        "슨트 : " +
        SNT +
        "원\n" +
        "루나 : " +
        LUNA +
        "원"
    );
  }

  if (msg.indexOf("/비트") != -1) {
    var cmc = org.jsoup.Jsoup.connect("https://coinmarketcap.com/").get();
    var cmcDomi = cmc
      .select(
        "#__next > div > div.sc-1xxpehh-0.iHwvSH > div.sc-1l9306o-0.gjGEuR.cmc-header-mobile > div.sc-18ghxad-0.ifvooB > div > div.cmc-global-stats__content > div > span:nth-child(3) > a"
      )
      .text();
    var cmcBTC = cmc
      .select(
        "#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div:nth-child(1) > div > div.tableWrapper___3utdq > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > a"
      )
      .text();

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
        cmcBTC +
        "\n" +
        BTC +
        "원\n" +
        "비트코인 도미넌스 : " +
        cmcDomi
    );
  }
}

function commify(n) {
  var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
  n += ""; // 숫자를 문자열로 변환

  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

  return n;
}
