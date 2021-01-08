const scriptName = "stockbot";

const MARKET_KOSPI = "kospi";
const MARKET_KOSDAQ = "kosdaq";

function getStockPriceWithQuery(stockName) {
  const stockInfo = getStockInfo(stockName);
  if (!stockInfo) {
    return null;
  }
  return getStockPrice(stockInfo.name, stockInfo.code);
}

function getStockInfo(stockName) {
  const document = org.jsoup.Jsoup.connect("https://www.google.com/search?q=%EC%A3%BC%EA%B0%80 " + stockName)
      .get();
  const nameElement = document.select("div[class=oPhL2e]").first();
  if (!nameElement) {
    return null;
  }
  const name = nameElement.text();
  const codeElement = document.select("div[class=HfMth]").first();
  const rawCode = codeElement.text();
  let code = null;
  let market = null;
  if (rawCode.startsWith("KRX: ")) {
    code = rawCode.substring("KRX: ".length);
    market = MARKET_KOSPI;
  } else if (rawCode.startsWith("KOSDAQ: ")) {
    code = rawCode.substring("KOSDAQ: ".length);
    market = MARKET_KOSDAQ;
  } else {
    return null;
  }

  return {
    name: name,
    market: market,
    code: code,
  };
}

function getStockPrice(name, code) {
  const document = org.jsoup.Jsoup.connect("https://polling.finance.naver.com/api/realtime?query=SERVICE_ITEM%3A" + code)
      .get();
  const jsonObject = JSON.parse(document.text());
  const data = jsonObject.result
      .areas[0]
      .datas[0];
  const currentPrice = data.nv;
  const prevDayClosePrice = data.sv;
  let incdecRate = data.cr;
  if (currentPrice < prevDayClosePrice) {
    incdecRate = -1 * incdecRate;
  }

  return {
    name: name,
    code: code,
    currentPrice: currentPrice,
    prevDayClosePrice: prevDayClosePrice,
    incdecRate: incdecRate,
  };
}

function getLegacyGetStockPrice(name) {
  var stockURL = Utils.getWebText(
      "https://www.google.com/search?q=%EC%A3%BC%EC%8B%9D%20%EC%B0%A8%ED%8A%B8" + name
  );
  var priceTmp1 = stockURL.split("vWLAgc")[1].split("</span>")[0];
  var price = priceTmp1.split(">")[1];
  var currencyTmp1 = stockURL.split("T3Us2d")[1].split("</span")[0];
  var currency = currencyTmp1.split("> ")[1];

  var stockNameTmp1 = stockURL.split("oPhL2e")[2].split("</div>")[0];
  var stockName = stockNameTmp1.split(">")[1];
  var stockName = stockName.trim();
  var stockName = stockName.replace("&amp:", "&");

  var incdecRateTmp = stockURL.split("qRSVye")[1].split("span jsname")[0];
  var incdecRateTmp2 = incdecRateTmp.split('label="')[1].split('">')[0];
  var incdecRate = incdecRateTmp2.split("%")[0];
  var incdec = incdecRateTmp2.split("%")[1];
  incdecN = incdec == " 증가" ? "▲" : "▼";
  return "실시간 " +
      stockName +
      " 시세\n" +
      price +
      " " +
      currency +
      " (" +
      incdecN +
      incdecRate +
      "% " +
      ")"
}

function generateResponse(stockName, price, currency, incdecRate) {
  let incdecN;
  let incdecRateN;
  if (incdecRate == 0) {
    incdecN = " "
  } else if (incdecRate > 0) {
    incdecN = "▲"
  } else {
    incdecN = "▼"
  }
  
  incdecRateN = Math.abs(incdecRate);

  return "실시간 " + stockName + " 시세\n"
      + price + " " + currency + " (" + incdecN + incdecRateN + "% " + ")";
}


function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    imageDB,
    packageName
) {
  let debugFlag = false;
  if (msg.startsWith("/debug ")) {
    debugFlag = true;
    msg = "/" + msg.substring("/debug ".length)
  }

  if (msg.indexOf("/주가 ") != -1 || msg.indexOf("/stock ") != -1) {
    const query = msg.substring("/주가 ".length);
    const stockPrice = getStockPriceWithQuery(query);
    let replyMsg = "";
    if (debugFlag) {
      replyMsg = "요청: [" + query + "]\n"
    }

    if (!stockPrice) {
      if (debugFlag) {
        replyMsg += "getStockPriceWithQuery 실패\n"
      }
      replyMsg += getLegacyGetStockPrice(query)
      replier.reply(replyMsg);
      return;
    }

    if (debugFlag) {
      replyMsg += "getStockPriceWithQuery: name[" + stockPrice.name + "], code[" + stockPrice.code + "]" + "\n\n";
    }

    replyMsg += generateResponse(stockPrice.name, stockPrice.currentPrice, "KRW", stockPrice.incdecRate);
    replier.reply(replyMsg);
  }
}
