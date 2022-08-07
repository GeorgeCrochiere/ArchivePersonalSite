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
                <a class="dds white-text-muted dropdown-start" id="dropName" href="#">Clarkson Honors</a>
                <a class="dark-text drop-hover dropdown-content" id="dropdownContent1" href="../pages/honors-strengths.html">Strengths</a>
                <a class="dark-text drop-hover dropdown-content" id="dropdownContent2" href="../pages/honors-ethics.html">Professional Ethics</a>
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
                <a class="dark-text menu-link menu-item" href="../pages/about.html" onclick="menuToggle()" id="menuList">About</a>
                <a class="dark-text menu-link menu-item" href="../pages/mission-statement.html" onclick="menuToggle()">Mission Statement</a>
                <a class="dark-text menu-link menu-item" href="../pages/resume.html" onclick="menuToggle()">Resume</a>
                <a class="dark-text menu-link menu-item" href="../pages/contact.html" onclick="menuToggle()">Contact Me</a>
                <a class="dark-text menu-dropdown-start menu-item" href="#" onclick="menuDropToggle()">Clarkson Honors</a>
                <a class="dark-text-muted menu-dropdown-link" href="../pages/honors-strengths.html" onclick="menuToggle()" id="menuDropTest">Strengths -</a>
                <a class="dark-text-muted menu-dropdown-link" href="../pages/honors-ethics.html" onclick="menuToggle()">Professional Ethics -</a>
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