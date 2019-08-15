$(document).ready(initializeApp);

function initializeApp() {
    applyClickHandlers();
}

var description = 
    {"project1": "",
    "project2": "",
    "project3": "",
    "project4": "",
    "project5": "",
    "project6": ""
}

function applyClickHandlers() {
    $(".hamburger-list-item").click(navigateHamburger);
    $(".hamburger-menu").click(toggleHamburger);
    $(".graphic-sample").click(displayDetails);
    $("#close-modal").click(closeModal);
    $(".graphic-focus").click(closeModal);
    $(".graphic-focus").click(closeHamburger);

//   $(document).not(".hamburger-menu").click(checkHamburger);
}

function navigateHamburger(event) { 
    var clickedListItem = event.target;
    var id= $(clickedListItem).attr("target");
    console.log(id);
    var page = document.getElementById(id);
    page.scrollIntoView();
    // $(".tab-pane").removeClass("show");
    // $(".tab-pane").removeClass("active");
    // $(`#nav-${page}`).addClass("show");
    // $(`#nav-${page}`).addClass("active");
    $(".graphic-focus").hide();
    $(".hamburger-list").hide();

}
function displayDetails(event) {
    console.log(event.target.src);
    $("#graphic-detail-image").attr({
        "src" : event.target.src
    })
    
    $("#graphic-detail-desc").text(description[event.target.id]);
    $(".graphic-focus").show();
    $(".img-modal").show();

    var clickedIMage = event.target; 
}

function closeModal() {
    console.log("close Modal called");
    $(".graphic-focus").hide();
    $(".img-modal").hide();
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
function closeHamburger() {
    $(".graphic-focus").hide();
    $(".hamburger-list").hide();
   
}
function toggleHamburger() {
    $(".hamburger-list").show();
    $(".graphic-focus").show();
}
// $(function() {
//     $("#playlist img").on("click", function() {
//         $("#playlist img").css({
//             "border": ""
//         });
//         $(this).css({
//             "border": "white 5px solid",
//         })
//         $("#videoarea").attr({
//             "src": $(this).attr("movieurl"),
//             "poster": "",
//             "autoplay": "autoplay"
//         })
//     })
//     $("#playlist img").eq(0).css({
//         "border": "white 5px solid",
//     });
//     $("#videoarea").attr({
//         "src": $("#playlist img").eq(0).attr("movieurl"),
//         "poster": $("#playlist img").eq(0).attr("moviesposter")
//     })
    
//     $(".nav-item").on("click", function(event) {
//         var currentTab = event.target.id
//         var currentVideo = $("#videoarea").get(0); // trying to grab the video to set it to pause 
//        if (currentTab === "nav-videos-tab") {
//            currentVideo.play();
//            return
//        }
//        else {
//         currentVideo.pause();
//        }
        
//     })
// })