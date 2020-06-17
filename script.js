const changeClass = () => {
    if (windowWidth.matches) {
        document.getElementById('aboutContent').className = "center";
        document.getElementById('contacts').className = "center";
    } else {
    document.getElementById('aboutContent').className = "about-content";
    document.getElementById('contacts').className = "contacts";
    }
}

let windowWidth = window.matchMedia("(max-width: 1000px)")
changeClass(windowWidth)
windowWidth.addEventListener(changeClass);
