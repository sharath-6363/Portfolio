
//Project Js
var mixer =mixitup('.project-gallery');

// Skill Js

const circles = document.querySelectorAll('.circle');

function handleScrollAnimation() {
    circles.forEach(elem => {
        if (isInViewport(elem)) {
            var dots = elem.getAttribute("data-dots");
            var marked = elem.getAttribute("data-percent");
            var percent = Math.floor((dots * marked) / 100);
            var points = "";
            var rotate = 360 / dots;

            for (let i = 0; i < dots; i++) {
                points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
            }
            elem.innerHTML = points;

            const pointsMarked = elem.querySelectorAll('.points');
            for (let i = 0; i < percent; i++) {
                pointsMarked[i].classList.add('marked')
            }
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

handleScrollAnimation();

window.addEventListener('scroll', handleScrollAnimation);


const scriptelements = document.querySelectorAll('.animte0')

const observer0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('htmls');
            entry.target.classList.remove('animte0');
        } else {
            entry.target.classList.remove('htmls');
            entry.target.classList.add('animte0');
        }
    });
});

scriptelements.forEach(element => {
    observer0.observe(element);
});



const jss = document.querySelectorAll('.animte1')

const observer1= new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('jsa');
            entry.target.classList.remove('animte1');
        } else {
            entry.target.classList.remove('jsa');
            entry.target.classList.add('animte1');
        }
    });
});

jss.forEach(element => {
    observer1.observe(element);
});


const animat2 = document.querySelectorAll('.animte2')

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reacts');
            entry.target.classList.remove('animte2');
        } else {
            entry.target.classList.remove('reacts');
            entry.target.classList.add('animte2');
        }
    });
});

animat2.forEach(element => {
    observer2.observe(element);
});


const fsd = document.querySelectorAll('.animte3')

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fsds');
            entry.target.classList.remove('animte3');
        } else {
            entry.target.classList.remove('fsds');
            entry.target.classList.add('animte3');
        }
    });
});

fsd.forEach(element => {
    observer3.observe(element);
});