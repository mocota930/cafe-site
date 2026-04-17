let resizeTimer;
window.addEventListener("resize", () => {
    // リサイズが始まったらクラスを追加 
    document.body.classList.add("resize-animation-stopper");
    // リサイズが止まって400ms経過したらクラスを外す 
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { document.body.classList.remove("resize-animation-stopper"); }, 400);
});
