const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const title = document.getElementById('title');
const gif = document.getElementById('gif');
const gif2 = new Image();
gif2.src = 'snoopy2.gif';

let width = 100;
let height = 50;
let sizeY = 20;
let sizeN = 20;
let tf = false;
let pls = 'please';
let count = 0;

yesBtn.addEventListener('click', function() {
    title.textContent = "YIPPEE!"
    noBtn.disabled = true;
    yesBtn.style.width = 100 + 'px';
    yesBtn.style.height = 50 + 'px';
    yesBtn.style.fontSize = 20 + 'px';
    noBtn.style.fontSize = 20 + 'px';
    noBtn.textContent = '<3';
    yesBtn.textContent = 'yayyy';
    if (tf){
        title.textContent = "YES! FINALLY"
        noBtn.textContent = 'hehe';
        yesBtn.textContent = '>:)';
    }
    gif.src = 'snoopy2.gif';
    gif.style.height = 300 + 'px';
    gif.style.width = 220 + 'px';
});


noBtn.addEventListener('click', function() {
    tf = true;
    width += 20;
    height += 10;
    sizeY += 4;
    if (sizeN > 9) {
        sizeN--;
    }   
    yesBtn.style.width = width + 'px';
    yesBtn.style.height = height + 'px';
    yesBtn.style.fontSize = sizeY + 'px';
    noBtn.style.fontSize = sizeN + 'px';
    noBtn.textContent = pls;
    count++;
    if (count % 5 == 0) {
        pls += 'please';
    }
})
