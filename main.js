$(document).ready(initializeApp);

function initializeApp() {
    applyClickHandlers();
}

function applyClickHandlers() {
    $(".hamburger-list-item").click(navigateHamburger);
    $(".hamburger-menu").click(toggleHamburger);
 $("body").click(checkHamburger);
}

function navigateHamburger(event) { 
    var clickedListItem = event.target;
    var page = $(clickedListItem).attr("id");
    $(".tab-pane").removeClass("show");
    $(".tab-pane").removeClass("active");
    $(`#nav-${page}`).addClass("show");
    $(`#nav-${page}`).addClass("active");
    $(".hamburger-list").toggle("hide");

}
function checkHamburger(event) {
   if (event.target.closest(".hamburger-list-container")) {
       return;
   }
   if (!($(".hamburger-list").is(':visible'))) {
       return;
   }
   $(".hamburger-list").hide()

}

function toggleHamburger() {
    $(".hamburger-list").show();

}
$(function() {
    $("#playlist img").on("click", function() {
        $("#playlist img").css({
            "border": ""
        });
        $(this).css({
            "border": "white 5px solid",
        })
        $("#videoarea").attr({
            "src": $(this).attr("movieurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#playlist img").eq(0).css({
        "border": "white 5px solid",
    });
    $("#videoarea").attr({
        "src": $("#playlist img").eq(0).attr("movieurl"),
        "poster": $("#playlist img").eq(0).attr("moviesposter")
    })
    
    $(".nav-item").on("click", function(event) {
        var currentTab = event.target.id
        var currentVideo = $("#videoarea").get(0); // trying to grab the video to set it to pause 
       if (currentTab === "nav-videos-tab") {
           currentVideo.play();
           return
       }
       else {
        currentVideo.pause();
       }
        
    })
})