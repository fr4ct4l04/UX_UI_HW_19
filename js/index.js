console.log("Your index.js file is loaded correctly!");

$(".send-button").on("mouseover", function (){
    $(this).css("background-color","#FBDAE0");
});

$(".send-button").on("mouseleave", function (){
    $(this).css("background-color","#660018");
});

$(".send-button").on("click", function (){
    $(this).css("background-color","#CAC5D3");
});