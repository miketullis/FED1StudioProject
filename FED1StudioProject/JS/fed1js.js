// Team Lightbox Functionality
$(function () {
    $(".team").on("click", function () {
        //find the source attribute of the clicked image and store as variable
        var imgSrc = $(this).attr("src");

        //plug an img tag into the #lightbox-content div -- use imgSrc
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="imgLightbox" />');
      
        //make lightbox visible
        $("#lightbox-container").fadeIn(500);

        //when the user click anywhere within the lightbox container, .fadeOut()
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });

    });
});


// Class Schedule Functionality
function openAdminNav() {
        document.getElementById('admin-btn').style.display = "none";
        document.getElementById('admin-nav').style.width = "250px";
}

function closeAdminNav() {
        document.getElementById('admin-btn').style.display = "block";
        document.getElementById('admin-nav').style.width = "0";
}



// Course Table visibility toggle
function toggle_visibility(id1, id2) {
        // Get all elements with class="course" and change display style to "none"
        course = document.getElementsByClassName("course");
    for (i = 0; i < course.length; i++) {
        course[i].style.display = "none";
    }
// Get the element with display stye "none" and change to "block" according to id1 & id2 (found in link)
    if (document.getElementById(id1).style.display == 'inline-block' && document.getElementById(id2).style.display == 'inline-block') {
        document.getElementById(id1).style.display = 'none';
        document.getElementById(id2).style.display = 'none';
    }
    else {
        document.getElementById(id1).style.display = 'inline-block';
        document.getElementById(id2).style.display = 'inline-block';
    }
}




