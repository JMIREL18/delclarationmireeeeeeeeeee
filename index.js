const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('YEEEEEHHHHHHHH NO TE ARREPENTIRAS NUNCAAAAAAAAAAA')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*700);
    const randomY = parseInt(Math.random()*700);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})