document.querySelector("button.clickShow").addEventListener("click", function () {
    document.querySelector("#demoo").setAttribute("class", "showNow");
});

document.querySelector("button.clickHide").addEventListener("click", function () {
    document.querySelector("#demoo").setAttribute("class", "showHide");
});
