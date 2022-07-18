/*function addImports() {

    var importText = `
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/text.css">
        <link rel="stylesheet" href="../css/menuIcon.css">
        <link rel="stylesheet" href="../css/navbar.css">
        <link rel="stylesheet" href="../css/footer.css">

        <script src="../js/site.js"></script>
        <script src="../js/menuList.js"></script>

        <link href="https://fonts.googleapis.com/css?family=Roboto Slab" rel="stylesheet">
        <style>
            body {
                font-family: 'Roboto Slab';
            }
        </style>
    `;
    var originalText = document.getElementById("header").innerHTML;
    document.getElementById("header").innerHTML = originalText + importText;
}*/

function addHeaderContent() {
    var headerText = `
        <!--Home Button-->
        <div>
            <a class="main white-text" id="homeButton" href="../index.html">George D. Crochiere</a>
        </div>
        <!--Navbar Items-->
        <div class="navbar" id="navbar">
            <a class="nav-link white-text-muted" href="../pages/test.html">About Me</a>
            <a class="nav-link white-text-muted" href="#">Mission Statement</a>
            <a class="nav-link white-text-muted" href="#">Resume</a>
            <a class="nav-link white-text-muted" href="#">Contact Me</a>
            <!--Clarkson Dropdown-->
            <div class="dropdown" onclick="dropToggle()">
                <li class="dropdown-start" id="dropName"><a class="dds white-text-muted" href="#">Clarkson Honors</a></li>
                <li class="dropdown-content" id="dropdownContent1"><a class="dark-text drop-hover" href="#">Strengths</a></li>
                <li class="dropdown-content" id="dropdownContent2"><a class="dark-text drop-hover" href="#">Professional Ethics</a></li>
            </div>
        </div>
        <!--Menu Selector-->
        <div class="collapse-nav" id="collapse-navbar">
            <div class="menu-content">
                <li class="menu-button" onclick="menuToggle()">
                    <a class="white-text menu" id="menuToggle" href="#">
                        <div class="menuIcon"></div>
                        <div class="menuIcon"></div>
                        <div class="menuIcon"></div>
                    </a>
                </li>
                <li class="menu-link menu-item" id="menuList" onclick="menuToggle()"><a class="dark-text menu-hover" href="#">About</a></li>
                <li class="menu-link menu-item" onclick="menuToggle()"><a class="dark-text menu-hover" href="#">Mission Statement</a></li>
                <li class="menu-link menu-item" onclick="menuToggle()"><a class="dark-text menu-hover" href="#">Resume</a></li>
                <li class="menu-link menu-item" onclick="menuToggle()"><a class="dark-text menu-hover" href="#">Contact Me</a></li>
                <li class="menu-dropdown-start menu-item" onclick="menuDropToggle()"><a class="dark-text menu-hover" href="#">Clarkson Honors</a></li>
                <li class="menu-dropdown-link" id="menuDropTest" onclick="menuToggle()"><a class="dark-text-muted menu-hover-drop" href="#">Strengths -</a></li>
                <li class="menu-dropdown-link" onclick="menuToggle()"><a class="dark-text-muted menu-hover-drop" href="#">Professional Ethics -</a></li>
            </div>
        </div>
    `;
    document.getElementById("navImport").innerHTML = headerText;
}