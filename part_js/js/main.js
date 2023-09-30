function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.width === "0px" || menu.style.width === "") {
        menu.style.width = "200px";
    } else {
        menu.style.width = "0";
    }
}

function showExample(id) {
    var examples = document.querySelectorAll(".content > div");
    examples.forEach(function (example) {
        example.style.display = "none";
    });

    var selectedExample = document.getElementById(id);
    if (selectedExample) {
        selectedExample.style.display = "block";
    }
}