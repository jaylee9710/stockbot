function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    if(msg.indexOf("/나스닥")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var nasdaq = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(6) > td.pid-14958-last").text();
        var nasdaqRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(6) > td.bold.pid-14958-pcp.greenFont").text();
        var nasdaqRateN = nasdaqRate.substr(1);
        var incdec = nasdaqRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 나스닥 지수\n"+nasdaq+" ("+incdecN+nasdaqRateN+")");
    }

    if(msg.indexOf("/다우")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var dow = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(4) > td.pid-169-last").text();
        var dowRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(4) > td.bold.greenFont.pid-169-pcp").text();
        var dowRateN = dowRate.substr(1);
        var incdec = dowRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 다우존스 지수\n"+dow+" ("+incdecN+dowRateN+")");
    }

    if(msg.indexOf("/다우존스")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var dow = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(4) > td.pid-169-last").text();
        var dowRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(4) > td.bold.greenFont.pid-169-pcp").text();
        var dowRateN = dowRate.substr(1);
        var incdec = dowRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 다우존스 지수\n"+dow+" ("+incdecN+dowRateN+")");
    }

    if(msg.indexOf("/snp")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var snp = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(5) > td.pid-166-last").text();
        var snpRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(5) > td.bold.greenFont.pid-166-pcp").text();
        var snpRateN = snpRate.substr(1);
        var incdec = snpRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 S&P500 지수\n"+snp+" ("+incdecN+snpRateN+")");
    }

    if(msg.indexOf("/에센피")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var snp = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(5) > td.pid-166-last").text();
        var snpRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(5) > td.bold.greenFont.pid-166-pcp").text();
        var snpRateN = snpRate.substr(1);
        var incdec = snpRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 S&P500 지수\n"+snp+" ("+incdecN+snpRateN+")");
    }

    if(msg.indexOf("/러셀")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var rsl = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(7) > td.pid-170-last").text();
        var rslRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(7) > td.bold.greenFont.pid-170-pcp").text();
        var rslRateN = rslRate.substr(1);
        var incdec = rslRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 러셀 지수\n"+rsl+" ("+incdecN+rslRateN+")");
    }

    if(msg.indexOf("/코스피")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var kospi = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(1) > td.pid-37426-last").text();
        var kospiRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(1) > td.bold.pid-37426-pcp.greenFont").text();
        var kospiRateN = kospiRate.substr(1);
        var incdec = kospiRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 코스피 지수\n"+kospi+" ("+incdecN+kospiRateN+")");
    }

    if(msg.indexOf("/코스닥")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var kosdaq = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(3) > td.pid-38016-last").text();
        var kosdaqRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(3) > td.bold.pid-38016-pcp.greenFont").text();
        var kosdaqRateN = kosdaqRate.substr(1);
        var incdec = kosdaqRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 코스닥 지수\n"+kosdaq+" ("+incdecN+kosdaqRateN+")");
    }

    if(msg.indexOf("/나선")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/indices-futures").get();
        var nasdaqF = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(3) > td.pid-8874-last").text();
        var nasdaqFRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(3) > td.bold.pid-8874-pcp.redFont").text();
        var nasdaqFRateN = nasdaqFRate.substr(1);
        var incdec = nasdaqFRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 나스닥 선물 지수\n"+nasdaqF+" ("+incdecN+nasdaqFRateN+")");
    }

    if(msg.indexOf("/금")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/commodities/metals").get();
        var gold = indexURL.select("#pair_8830 > td.pid-8830-last").text();
        var goldRate = indexURL.select("#pair_8830 > td.bold.pid-8830-pcp.greenFont").text();
        var goldRateN = goldRate.substr(1);
        var incdec = goldRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 금 선물 가격\n"+gold+" ("+incdecN+goldRateN+")");
    }

    if(msg.indexOf("/은")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/commodities/metals").get();
        var silver = indexURL.select("#pair_8836 > td.pid-8836-last").text();
        var silverRate = indexURL.select("#pair_8836 > td.bold.pid-8836-pcp.greenFont").text();
        var silverRateN = silverRate.substr(1);
        var incdec = silverRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 은 선물 가격\n"+silver+" ("+incdecN+silverRateN+")");
    }

    if(msg.indexOf("/오일")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/commodities/energy").get();
        var oilWTI = indexURL.select("#pair_8849 > td.pid-8849-last").text();
        var oilWTIRate = indexURL.select("#pair_8849 > td.bold.pid-8849-pcp.redFont").text();
        var oilWTIRateN = oilWTIRate.substr(1);
        var incdec = oilWTIRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 WTI유 선물 가격\n"+oilWTI+" ("+incdecN+oilWTIRateN+")");
    }

    if(msg.indexOf("/vix")!=-1){
        
        var indexURL = org.jsoup.Jsoup.connect("https://kr.investing.com/indices/major-indices").get();
        var vix = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(8) > td.pid-44336-last").text();
        var vixRate = indexURL.select("#cross_rates_container > table > tbody > tr:nth-child(8) > td.bold.greenFont.pid-44336-pcp").text();
        var vixRateN = vixRate.substr(1);
        var incdec = vixRate.substr(0,1);
        incdecN = incdec == "+"?"▲":"▼";

        replier.reply("실시간 뉴욕시장 변동성 지수\n"+vix+" ("+incdecN+vixRateN+")");
    }


    if(msg.indexOf("/지수")!=-1){
        
        replier.reply("<지원하는 주요 지수 및 원자재>\n"+
        "나스닥, 나스닥 선물, 다우, 러셀\n"+
        "S&P500, 코스피, 코스닥, VIX\n"+
        "금, 은, WTI오일");
    }
}