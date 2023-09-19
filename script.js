const picSwap = () => {
    let picOne = document.getElementsByClassName("book");
    picOne.src = "imgs/elantris.jpg";
    let desc = document.getElementById("desc");
    desc.innerHTML = "My other favourite book, Elantris also by Brandon Sanderson.";
};

const picSwapBack = () => {
    let picTwo = document.getElementsByClassName("book");
    picTwo.src = "imgs/mistborn.jpg";
    let desc = document.getElementById("desc");
    desc.innetHTML = "";
};

const picScript = () => {
    let pic = document.getElementsByClassName("book");
    if (pic == "imgs/elantris.jpg") {
        picSwap
    } else {
        picSwapBack
    };
};

document.getElementsByClassName("about-me-photo").addEventListener("click", picScript);