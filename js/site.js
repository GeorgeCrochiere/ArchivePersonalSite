headerSizetemp();


function headerSizetemp() {
    var width = window.outerWidth;
    var homeWidth = document.getElementById("homeButton").offsetWidth;
    if (width > (homeWidth * 4)) {
        document.getElementById("main").style.backgroundColor = "crimson";
        document.getElementById("navbar").style.display = "block";
        document.getElementById("collapse-navbar").style.display = "none";
    } else {
        document.getElementById("main").style.backgroundColor = "blueviolet";
        document.getElementById("navbar").style.display = "none";
        document.getElementById("collapse-navbar").style.display = "block";
    }

    var txt = "Home Width: " + homeWidth + ", Window Width: " + width;
    document.getElementById("main").textContent = txt;
            
}