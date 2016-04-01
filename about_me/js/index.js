/**
 * Created by Administrator on 2016-3-28.
 */
$(function(){
    $('.content').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        'navigation':true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu:"#menu",
        /*verticalCentered:false,*/
    });

});




// 图片轮播

//内容适应居中
var size=$(function(){
    $("aside").css({"top":($(".active").height()-$("aside").height())/2});
    $("#home_content").css({"padding-top":($(".active").height()-$("#home_content").height())/6});
    $(".about-content").css({"padding-top":($(".active").height()-$(".about-content").height())/6});
    $(".skill-content").css({"padding-top":($(".active").height()-$(".skill-content").height())/6});
    $("#exp_content").css({"padding-top":($(".active").height()-$("#exp_content").height())/6});
    $("#demo_content").css({"padding-top":($(".active").height()-$("#demo_content").height())/6});;
});
$(window).resize(function(){
    size();
});