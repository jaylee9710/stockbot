const scriptName = "group";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {


if(msg.indexOf("/코드")!=-1){
    
    replier.reply("입장코드 : 002366");
}

if(msg.indexOf("/한강물 온도")!=-1){
    
    var hanURL = Utils.getWebText("https://hangang.life/");
    var hanTempT1 = hanURL.split("script async src")[1].split("</button>")[0];
    var hanTempT2 = hanTempT1.split("temp")[1].split("button")[0];
    var hanTemp = hanTempT2.split("<b>")[1].split("</b>")[0];
    replier.reply("현재 한강물 온도는" + hanTemp +"입니다." + " (당신은 소중한 사람이에요)");
}

if(msg.indexOf("/코로나")!=-1){
    
    var covidURL = org.jsoup.Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98+%ED%99%95%EC%A7%84%EC%9E%90").get();
    var covid = covidURL.select("#_cs_production_type > div > div:nth-child(7) > div.status_info > ul > li.info_01 > em").text();
    replier.reply("금일 확진자 수 : "+covid);
}

}