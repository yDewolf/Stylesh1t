document.addEventListener("DOMContentLoaded", function () {
    updateFooterStatus();
});

document.addEventListener("resize", function () {
    updateFooterStatus();
});

function updateFooterStatus() {
    let navbar = document.getElementById("navbar");
    let content_elements = document.getElementsByClassName("content");
    
    let total_size = navbar.clientHeight;
    for (idx = 0; idx < content_elements.length; idx++) {
        let element = content_elements[idx];
        total_size += element.clientHeight;
    }
    console.log(total_size);

    let footer = document.getElementById("footer");

    let max_size = window.innerHeight;
    if (total_size > max_size) {
        console.log("Window is big enough, unfixing footer")
        footer.classList.remove("fixed");
    } else {
        if (footer.classList.contains("fixed")) {
            return;
        }
        console.log("Window not is big enough, fixing footer")
        footer.classList.add("fixed");
    }
}