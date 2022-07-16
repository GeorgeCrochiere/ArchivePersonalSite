function menuToggle() {
    if (document.getElementById("menuList").style.display == "block") {
        menuClose();
    } else {
        menuOpen();
    }
}

function menuOpen() {
    document.getElementById("menuList").style.display = "block";
}

function menuClose() {
    document.getElementById("menuList").style.display = "none";
}

function dropToggle() {
    if (document.getElementById("dropdownContent1").style.display == "block") {
        dropClose();
    } else {
        dropOpen();
    }
}

function dropOpen() {
    document.getElementById("dropdownContent1").style.display = "block";
    document.getElementById("dropdownContent2").style.display = "block";
}

function dropClose() {
    document.getElementById("dropdownContent1").style.display = "none";
    document.getElementById("dropdownContent2").style.display = "none";
}