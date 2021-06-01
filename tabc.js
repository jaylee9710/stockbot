function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    imageDB,
    packageName
  ) {
    if (room == "탭씨" && msg.indexOf("띡") != -1) {

        replier.reply("아잇");
    }

    if (room == "탭씨" && msg.indexOf("/뎁스") != -1) {

      replier.reply("https://dc-charts.com/depth_btc.php?ex=2&cu=0&tz=1&ar=0");
    }

   if (room == "탭씨" && msg.indexOf("/텐서") != -1) {

    replier.reply("https://tensorcharts.com/");
   }

   if (room == "탭씨" && msg.indexOf("/시총") != -1) {
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

    var cmcMC = cmc.select("#__next > div > div.sc-1ojz83d-0.fLfsZi > div.sc-1l9306o-0.gjGEuR.cmc-header-mobile > div.sc-18ghxad-0.ifvooB > div > div.cmc-global-stats__content > div > span:nth-child(1) > a").text();
    var cmcTC = cmc.select("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(3) > td:nth-child(7) > p").text();
    var cmc24V = cmc.select("#__next > div > div.sc-1ojz83d-0.fLfsZi > div.sc-1l9306o-0.gjGEuR.cmc-header-mobile > div.sc-18ghxad-0.ifvooB > div > div.cmc-global-stats__content > div > span:nth-child(2) > a").text();
    var cmcBitV = cmc.select("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > a > p").text();
    var cmcBitV2 = cmc.select("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(1) > td:nth-child(8) > div > p").text();
    cmcMC = cmcMC.substring(0, cmcMC.length-12);
    cmcTC = cmcTC.substring(0, cmcTC.length-12);
    cmc24V = cmc24V.substring(0, cmc24V.length-12);
    cmcBitV = cmcBitV.substring(0, cmcBitV.length-12);


    replier.reply(
      "실시간 코마캡 정보\n\n" +
        binanceBTC + "$" +
        "\n" +
        BTC +
        "원\n" +
        "비트코인 도미넌스 : " +
        cmcDomi + "\n" +
        "마켓캡 : " + cmcMC + "B\n" +
        "테더시총 : " + cmcTC + "B\n" +
        "24h Vol : " + cmc24V + "B\n" +
        "비트볼륨 : " + cmcBitV + "B\n" +
        "(" + cmcBitV2 + " )"

    );
  }

  function commify(n) {
    var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
    n += ""; // 숫자를 문자열로 변환
  
    while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");
  
    return n;
  }

  }