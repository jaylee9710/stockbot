const scriptName = "stockbot";

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  imageDB,
  packageName
) {
  if (msg.indexOf("/주가 ") != -1) {
    var stockURL = Utils.getWebText(
      "https://www.google.com/search?q=%EC%A3%BC%EA%B0%80" + msg.split(" ")[1]
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

    replier.reply(
      "실시간 " +
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
    );
  }

  if (msg.indexOf("/stock ") != -1) {
    var stockURL = Utils.getWebText(
      "https://www.google.com/search?q=%EC%A3%BC%EC%8B%9D%20%EC%B0%A8%ED%8A%B8" +
        msg.split(" ")[1]
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

    replier.reply(
      "실시간 " +
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
    );
  }
}
