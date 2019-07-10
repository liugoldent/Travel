var w = $(window).width();
alert(w);
// var widths = document.body.clientWidth;
// alert(widths);
//alert(width);
$('.row').css('width',w);

var RWDImg= (w-50);
console.log(RWDImg)
if(w<750){
    $('img').css('width', RWDImg)
    $('iframe').css('width', RWDImg)
}else if (w==980){
    $('#section5').css('width',w)
}

var OpenKyoto=new Vue({
    el:"#KYOTOBut",
    data:{},
    methods:{
        OpenKyotoContent:function(){
            $("#DAY1").css("display","block");
            $("#DAY2").css("display","block");
            $("#DAY3").css("display","block");
            $("#DAY4").css("display","block");
            $("#DAY5").css("display","block");
            $("#OSAKACont").css("display","none");
        }
    }
});
    

//Day1
var displayday1=new Vue({
    el:"#Day1Control",
    data:{},
    methods:{
        DisplayOpen:function(){
            $("#day1map").slideToggle(1000).css("display","block");
        }
    }
});


var Day1iframeMap=new Vue({
    el:"#day1map",
    data:{
        KANSAImgLink:"https://i.imgur.com/qa09Arkl.jpg",
        YaDoImgLink:"https://i.imgur.com/9JrzixPl.jpg",
        KANSAIMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=14&center=34.432170,135.230358",
        YADOMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=35.013780,135.775921"
    }
});
//Day1

//Day2
var displayday2=new Vue({
    el:"#Day2Control",
    data:{},
    methods:{
        DisplayOpen:function(){
            $("#day2map").slideToggle(1000).css("display","block");
        }
    }
});


var Day2iframeMap=new Vue({
    el:"#day2map",
    data:{
        FushimiImgLink:"https://i.imgur.com/1PHULTal.jpg",
        FushimiMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.967395,135.772704",
        KaizuImgLink:"https://i.imgur.com/MaZUr3il.jpg",
        KaizuMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=35.449425,136.087511"
    }
});
//Day2


//Day3
var displayday3=new Vue({
    el:"#Day3Control",
    data:{},
    methods:{
        DisplayOpen:function(){
            $("#day3map").slideToggle(1000).css("display","block");
        }
    }
});


var Day3iframeMap=new Vue({
    el:"#day3map",
    data:{
        KinkakuImgLink:"https://i.imgur.com/GIrT4nUl.jpg",
        KinkakuMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=35.039616,135.729275",
        RengeImgLink:"https://i.imgur.com/oLPrRPyl.jpg",
        RengeMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.889407,135.807691"
    }
});
//Day3

//Day4
var displayday4=new Vue({
    el:"#Day4Control",
    data:{},
    methods:{
        DisplayOpen:function(){
            $("#day4map").slideToggle(1000).css("display","block");
        }
    }
});


var Day4iframeMap=new Vue({
    el:"#day4map",
    data:{
        KiyomizuImgLink:"https://i.imgur.com/0hcKC7Ol.jpg",
        KiyomizuMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.995129,135.785121",
        NijojochoImgLink:"https://i.imgur.com/VJdGd6Ul.jpg",
        NijojochoMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=35.014467,135.748250"
    }
});
//Day4

//Day5
var displayday5=new Vue({
    el:"#Day5Control",
    data:{},
    methods:{
        DisplayOpen:function(){
            $("#day5map").slideToggle(1000).css("display","block");
        }
    }
});


var Day5iframeMap=new Vue({
    el:"#day5map",
    data:{
        ArashiyamaImgLink:"https://i.imgur.com/0KsUeipl.jpg",
        ArashiyamaMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=35.010528,135.681837",
        YasakaImgLink:"https://i.imgur.com/TWsYBIcl.jpg",
        YasakaMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=35.003765,135.778564"
    }
});
//Day5



//Day6

var OpenOsaka=new Vue({
    el:"#OSAKABut",
    data:{},
    methods:{
        OpenOsakaContent:function(){
            $("#DAY1").css("display","none");
            $("#DAY2").css("display","none");
            $("#DAY3").css("display","none");
            $("#DAY4").css("display","none");
            $("#DAY5").css("display","none");
            $("#OSAKACont").slideToggle(1000).css("display","block");
        }
    }
});

var displayday6=new Vue({
    el:"#Day6Control",
    data:{},
    methods:{
        DisplayOpen:function(){
            $("#day6map").slideToggle(1000).css("display","block");
        }
    }
});


var Day6iframeMap=new Vue({
    el:"#day6map",
    data:{
        DotonboriImgLink:"https://i.imgur.com/zZKGCmol.jpg",
        DotonboriMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.668995,135.501040",
        
        KaigandoriImgLink:"https://i.imgur.com/xCcaPXMl.jpg",
        KaigandoriMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.654713,135.428983",
        
        SenyoImgLink:"https://i.imgur.com/eOGKHvvl.jpg",
        SenyoMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.656485,135.431635",
        
        OsakaJoImgLink:"https://i.imgur.com/2P0Ck6ll.jpg",
        OsakaJoMapLink:"https://www.google.com/maps/embed/v1/search?key=AIzaSyAKPRtjCaWwtsRtJLlQWDC4c9UapdhJu1o&q=711&zoom=16&center=34.687486,135.525955"  
    }
});
//Day6
