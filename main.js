$(document).ready(initializeApp);

function initializeApp() {
    applyClickHandlers();
}

function applyClickHandlers() {
    $(".hamburger-list-item").click(navigateHamburger);
    $(".hamburger-menu").click(toggleHamburger);
//   $(document).not(".hamburger-menu").click(checkHamburger);
}

function navigateHamburger(event) { 
    var clickedListItem = event.target;
    var page = $(clickedListItem).attr("id");
    $(".tab-pane").removeClass("show");
    $(".tab-pane").removeClass("active");
    $(`#nav-${page}`).addClass("show");
    $(`#nav-${page}`).addClass("active");
    $(".hamburger-list").hide();

}
// function checkHamburger(event) {
//     console.log("here")
//    if (event.target.closest(".hamburger-list-container")) {
//        console.log("in hamburger list")
//        return;
//    }
//    if (!($(".hamburger-list").is(':visible'))) {
//        console.log("here?")
//        return;
//    }
//    console.log("before hide");
//    $(".hamburger-list").hide();

// }

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