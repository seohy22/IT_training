const moreBtn = document.querySelector('.metaInfo .metadata .titleNBtn .moreBtn');
const title = document.querySelector('.metaInfo .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});