function headerSize() {
    dropClose();
    menuClose();
    try {
        contactPageSize();
    } catch (error) {
        console.log("Ignore");
    }

    var width = document.getElementById("html").offsetWidth;
    var homeWidth = document.getElementById("homeButton").offsetWidth;
    
    if (width > (homeWidth * 4.1)) {
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("collapse-navbar").style.display = "none";
    } else {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("collapse-navbar").style.display = "block";
    }
}

function addListeners() {
    window.addEventListener('resize', headerSize);
    document.body.addEventListener('load', headerSize());
    document.body.addEventListener(onclick, () => {
        dropClose();
        menuClose();
    })
}

function contactPageSize() {
    var list = document.getElementsByClassName("column");
    if (document.getElementById("html").offsetWidth < 700) {
        document.getElementsByClassName("row")[0].style.height = '280pt';
        for (i = 0; i < list.length; i++) {
            list[i].style.width = '100%';
        }
    } else {
        for (i = 0; i < list.length; i++) {
            document.getElementsByClassName("row")[0].style.height = '80pt';
            list[i].style.width = '33.33%';
        }
    }
}