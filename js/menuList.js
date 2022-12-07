function menuToggle() {
    if (document.getElementById("menuList").style.display == "block") {
        menuClose();
    } else {
        menuOpen();
    }
    menuDropClose();
}

function menuOpen() {
    var menuItems = document.getElementsByClassName("menu-item");
    //(document.getElementsByClassName("menu-dropdown"))[0].style.display = "block";
    for (i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "block";
    }
}

function menuClose() {
    var menuItems = document.getElementsByClassName("menu-item");
    //(document.getElementsByClassName("menu-dropdown"))[0].style.display = "none";
    for (i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "none";
    }
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
    document.getElementById("dropdownContent3").style.display = "block";
}

function dropClose() {
    document.getElementById("dropdownContent1").style.display = "none";
    document.getElementById("dropdownContent2").style.display = "none";
    document.getElementById("dropdownContent3").style.display = "none";
}

function menuDropToggle() {
    if (document.getElementById("menuDropTest").style.display == "block") {
        menuDropClose();
    } else {
        menuDropOpen();
    }
}

function menuDropOpen() {
    var menuDropList = document.getElementsByClassName("menu-dropdown-link");
    (document.getElementsByClassName("menu-dropdown-start"))[0].classList.add("menu-dropdown-start-selected");
    for (i = 0; i < menuDropList.length; i++) {
        menuDropList[i].style.display = "block";
    }
}

function menuDropClose() {
    var menuDropList = document.getElementsByClassName("menu-dropdown-link");
    (document.getElementsByClassName("menu-dropdown-start"))[0].classList.remove("menu-dropdown-start-selected");
    for (i = 0; i < menuDropList.length; i++) {
        menuDropList[i].style.display = "none";
    }
}