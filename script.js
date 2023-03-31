let gitIcon = document.querySelector('.git-icon');
let linkedinIcon = document.querySelector('.linkedin-icon');
let instagramIcon = document.querySelector('.instagram-icon');
let facebookIcon = document.querySelector('.facebook-icon');
let overlay = document.querySelector('.hamburger-menu');

const openNav = () => {
    overlay.style.height = '100vh';
}

const closeNav = () => {
    overlay.style.height = '0vh';
}

const setBounce = (icon) => {
    let bounceClass = 'fa-bounce';

    if (icon.classList) icon.classList.add(bounceClass);
}

const removeBounce = (icon) => {
    let bounceClass = 'fa-bounce';

    if (icon.classList) if (icon.classList) icon.classList.remove(bounceClass);
}

//Events
gitIcon.addEventListener('mouseover', () => {
    setBounce(gitIcon);
})

gitIcon.addEventListener('mouseleave', () => {
    removeBounce(gitIcon);
})


linkedinIcon.addEventListener('mouseover', () => {
    setBounce(linkedinIcon);
})

linkedinIcon.addEventListener('mouseleave', () => {
    removeBounce(linkedinIcon);
})

instagramIcon.addEventListener('mouseover', () => {
    setBounce(instagramIcon);
})

instagramIcon.addEventListener('mouseleave', () => {
    removeBounce(instagramIcon);
})

facebookIcon.addEventListener('mouseover', () => {
    setBounce(facebookIcon);
})

facebookIcon.addEventListener('mouseleave', () => {
    removeBounce(facebookIcon);
})