const toggle = document.getElementById('switch');
const body = document.querySelector('body');

function mode_switch() {
    if (toggle.checked) {
        body.classList.add('dark')
    } else {
        body.classList.remove('dark')
    }
}










if (window.matchMedia("(min-width: 500px)").matches) {
    window.addEventListener("scroll", () => {const header = document.querySelector("header");
                                        header.classList.add("fixed"); 
                                        if (window.scrollY === 0) 
                                            { header.classList.remove("fixed")}});


    
let timeOutId;
let isAutoSliding = false;

// Start auto slide
function checkNextRadio(classname, sectionId) {
    const fullCards = document.querySelectorAll(`.${classname}`);
    let checkedIndex;

    for (let i = 0; i < fullCards.length; i++) {
        if (fullCards[i].classList.contains("flexfull")) {
            fullCards[i].classList.replace("flexfull", "none");
            checkedIndex = i;
            break;
        }
    }

    let nextIndex = (checkedIndex + 1) % fullCards.length;
    fullCards[nextIndex].classList.replace("none", "flexfull");
    if (isAutoSliding) {
        timeOutId = setTimeout(() => checkNextRadio(classname, sectionId), 5000);
    }



    // Observe visibility of section1
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Section became visible → start/resume auto-slide
            if (!isAutoSliding) {
                isAutoSliding = true;
                setTimeout(() => checkNextRadio(classname, sectionId), 1000);
            }
        } else {
            // Section left viewport → pause auto-slide
            isAutoSliding = false;
            clearTimeout(timeOutId);
        }
    });
}, {
    threshold: 0.5, // at least 50% visible
});

// Observe the slideshow section
const targetSection = document.querySelector(`#${sectionId}`);
observer.observe(targetSection);
}


function checkPrevRadio(classname) {
    const fullCards = document.querySelectorAll(`.${classname}`);
    let checkedIndex;

    for (let i = fullCards.length - 1; i >= 0; i--) {
        if (fullCards[i].classList.contains("flexfull")) {
            fullCards[i].classList.replace("flexfull", "none");
            checkedIndex = i;
            break;
        }
    }

    let prevIndex = (checkedIndex - 1 + fullCards.length) % fullCards.length;
    fullCards[prevIndex].classList.replace("none", "flexfull");

    // Pause auto-slide on manual interaction
    isAutoSliding = false;
    clearTimeout(timeOutId);
}


checkNextRadio("fullcard", "section2")
checkNextRadio("foodcard", "section3")
}




function swap(firstId, secondId) {
    const firstElement = document.getElementById(firstId);
    const secondElement = document.getElementById(secondId);

    if (firstElement.style.display === "block") {
        firstElement.style.display = "none";
        secondElement.style.display = "block";
    } else {
        firstElement.style.display = "block";
        secondElement.style.display = "none";
    }

}




const experiences = document.getElementById("section2");
const best = document.getElementById("section3");
function showExperiences() {
    experiences.style.display = "block";
    best.style.display = "none";
}
function showBest() {
    experiences.style.display = "none";
    best.style.display = "block";
}