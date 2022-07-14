headerSizetemp();


function headerSizetemp() {
    var width = document.getElementById("html").offsetWidth;
    var homeWidth = document.getElementById("homeButton").offsetWidth;
    if (width > (homeWidth * 4)) {
        document.getElementById("main").style.backgroundColor = "crimson";
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("collapse-navbar").style.display = "none";
    } else {
        document.getElementById("main").style.backgroundColor = "blueviolet";
        document.getElementById("navbar").style.display = "none";
        document.getElementById("collapse-navbar").style.display = "flex";
    }

    var txt = "Home Width: " + homeWidth + ", Window Width: " + width;
    document.getElementById("main").textContent = txt;
            
}