$(document).ready(function(){
    $(window).scrollTop(0);
})

$(".btn-back").click(function(){
    $(".detail-container").addClass("inactive");
    setTimeout(function(){
        $("#app").load("./index.html");
    }, 300);
})

$("#link-putfoot").click(function(){
    var url = ""; 
    window.open(url);
});

$("#link-board").click(function(){
    var url = ""; 
    window.open(url);
});

$("#link-team").click(function(){
    var url = ""; 
    window.open(url);
});
