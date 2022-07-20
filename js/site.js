function headerSize() {
    dropClose();
    menuClose();

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