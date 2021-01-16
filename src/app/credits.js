import image3 from './../../styles/img/img3.png';
import bcg from './../../styles/img/bcg.png';
import { createNewElement } from './mainPage';
import { createNewImgElement } from './mainPage';
import { showMainMenu } from './mainPage';

const mainWrap = document.getElementById('main-wrap');

export function showCredits() {
    createCreditsStructure();
}

function createCreditsStructure() {
    mainWrap.innerHTML = '';

    const creditsWrap = createNewElement('div', 'creditswrap', mainWrap);

    const img3 = createNewImgElement('heartimg', image3, creditsWrap);
    const titlesWrap = createNewElement('div', 'titleswrap', creditsWrap);
    const authorsWrap = createNewElement('div', 'authorswrap', creditsWrap);
    const backWrap = createNewElement('div', 'backwrap', creditsWrap);

    const creditsTitle = createNewElement('h1', 'creditstitle', titlesWrap, 'we made this!');
    const creditsSubTitle = createNewElement('h2', 'creditssubtitle', titlesWrap, 'check our githubs:');

    const person1 = createNewLink('https://github.com/KamilaGumkowska', 'Kamila Gumkowska', authorsWrap);
    const person2 = createNewLink('https://github.com/MateuszLepecki', 'Mateusz Łepecki', authorsWrap);
    const person3 = createNewLink('https://github.com/kcodex', 'Katarzyna Ratajska', authorsWrap);
    const person4 = createNewLink('https://github.com/sabinarusielik', 'Sabina Rusielik', authorsWrap);
    const person5 = createNewLink('https://github.com/SebastianSiwek', 'Sebastian Siwek', authorsWrap);
    const person6 = createNewLink('https://github.com/tarchal', 'Wojciech Tarchalski', authorsWrap);

    const backBtn = createNewElement('button', 'btn secondary backbtn', backWrap, 'back');

    backBtn.addEventListener('click', showMainMenu);
}

function createNewLink(linkHref, text = '', parent, linkClass = 'link') {
    const newLink = document.createElement('a');
    newLink.href = linkHref;
    newLink.innerHTML = text;
    newLink.className = linkClass;
    newLink.target = '_blank';
    parent.appendChild(newLink);
}
