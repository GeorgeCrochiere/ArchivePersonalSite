function addHeaderContent() {
    var headerText = `
        <!--Home Button-->
        <div class="homeSec">
            <a class="main white-text" id="homeButton" href="../index.html">George D. Crochiere</a>
        </div>
        <!--Navbar Items-->
        <div class="navbar" id="navbar">
            <a class="nav-link white-text-muted" href="../pages/about.html">About Me</a>
            <a class="nav-link white-text-muted" href="../pages/mission-statement.html">Mission Statement</a>
            <a class="nav-link white-text-muted" href="../pages/resume.html">Resume</a>
            <a class="nav-link white-text-muted" href="../pages/contact.html">Contact Me</a>
            <!--Clarkson Dropdown-->
            <div class="dropdown" onclick="dropToggle()">
                <li class="dropdown-start" id="dropName"><a class="dds white-text-muted" href="#">Clarkson Honors</a></li>
                <li class="dropdown-content" id="dropdownContent1"><a class="dark-text drop-hover" href="../pages/honors-strengths.html">Strengths</a></li>
                <li class="dropdown-content" id="dropdownContent2"><a class="dark-text drop-hover" href="../pages/honors-ethics.html">Professional Ethics</a></li>
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
                <li class="menu-link menu-item" id="menuList" onclick="menuToggle()"><a class="dark-text menu-hover" href="../pages/about.html">About</a></li>
                <li class="menu-link menu-item" onclick="menuToggle()"><a class="dark-text menu-hover" href="../pages/mission-statement.html">Mission Statement</a></li>
                <li class="menu-link menu-item" onclick="menuToggle()"><a class="dark-text menu-hover" href="../pages/resume.html">Resume</a></li>
                <li class="menu-link menu-item" onclick="menuToggle()"><a class="dark-text menu-hover" href="../pages/contact.html">Contact Me</a></li>
                <li class="menu-dropdown-start menu-item" onclick="menuDropToggle()"><a class="dark-text menu-hover" href="#">Clarkson Honors</a></li>
                <li class="menu-dropdown-link" id="menuDropTest" onclick="menuToggle()"><a class="dark-text-muted menu-hover-drop" href="../pages/honors-strengths.html">Strengths -</a></li>
                <li class="menu-dropdown-link" onclick="menuToggle()"><a class="dark-text-muted menu-hover-drop" href="../pages/honors-ethics.html">Professional Ethics -</a></li>
            </div>
        </div>
    `;
    document.getElementById("navImport").innerHTML = headerText;
}

function addFooterContent() {
    var footerText = `
    <div>
        <a class="footer-link footer-link-start white-text-muted" href="https://github.com/GeorgeCrochiere"><i class="fa fa-github"></i></a>
        <a class="footer-link white-text-muted" href="https://www.linkedin.com/in/george-d-crochiere/"><i class="fa fa-linkedin-square"></i></a>
        <a class="footer-link white-text-muted" href="javascript:window.location.href=atob('bWFpbHRvOmdlb3JnZS5kLmNyb2NoaWVyZUBob3RtYWlsLmNvbQ==')"><i class="fa fa-envelope"></i></a>
    </div>
    `;
    document.getElementById("footer").innerHTML = footerText;
    document.getElementById("link")
}