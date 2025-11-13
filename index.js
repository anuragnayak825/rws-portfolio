const sliderTrack = document.getElementById('sliderTrack');
sliderTrack.innerHTML += sliderTrack.innerHTML;

const sliderTrack_2 = document.getElementById('sliderTrack-2');
sliderTrack_2.innerHTML += sliderTrack_2.innerHTML;


// ===============================================================

const container = document.getElementById("polygon");
const cards = container.querySelectorAll(".cards");
const total = cards.length; // 16 cards
const radius = 660; // distance from center
const centerX = container.offsetWidth / 2;
const centerY = container.offsetHeight / 1.1;

const angleStep = (2 * Math.PI) / total;
let rotation = 0; // starting angle

function animate() {
    rotation += 0.002; // speed (smaller = slower)

    cards.forEach((card, i) => {
        const angle = i * angleStep + rotation;

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const deg = (angle * 180) / Math.PI + 90;

        card.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${deg}deg) translateZ(0)`;
    });
    requestAnimationFrame(animate);
}
animate();


// 
const menuDiv = document.querySelector('.menu-div');
const sideMenuBar = document.querySelector('.side-menu-bar');
menuDiv.addEventListener('click', () => {
    if (sideMenuBar.classList.contains('open')) {
        // Remove 'open' class to start closing animation
        sideMenuBar.classList.remove('open');
        menuDiv.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => {
            // No extra actions needed here since CSS pointer-events is handled by class
        }, 500); // match CSS transition duration
    } else {
        // Open menu
        sideMenuBar.classList.add('open');
        menuDiv.classList.add('open');
        document.body.style.overflow = 'hidden';  // Disable scroll


    }
});

// side bar close 

const link = document.querySelectorAll('.menu-item')

link.forEach((e, i) => {
    if (i == 0) {
       e.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    }

    e.addEventListener('click', () => {
        sideMenuBar.classList.remove('open');
        menuDiv.classList.remove('open');
        document.body.style.overflow = '';
    })
})


// Side Bar Hide script




