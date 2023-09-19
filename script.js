const picSwap = () => {
    let picOne = document.getElementsByClassName("book")[0];
    picOne.src = "imgs/elantris.jpg";
    let desc = document.getElementById("desc");
    desc.innerHTML = "My other favourite book, Elantris also by Brandon Sanderson.";
    picOne.name = "bookTwo";
};

const picSwapBack = () => {
    let picTwo = document.getElementsByClassName("book")[0];
    picTwo.src = "imgs/mistborn.jpg";
    let desc = document.getElementById("desc");
    desc.innerHTML = "My favourite book, Mistborn by Brandon Sanderson.";
    picTwo.name = "bookOne";
};

const picScript = () => {
    let pic = document.getElementsByClassName("book")[0];
    console.log(pic.class);
    if (pic.name == "bookOne") {
        picSwap();
    } else {
        picSwapBack();
    };
};

const photo = document.getElementsByClassName("about-me-photo")[0];
photo.addEventListener('click', picScript);