import image3 from './../../styles/img/img3.png';
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

    createNewImgElement('heartimg', image3, creditsWrap);
    const titlesWrap = createNewElement('div', 'titleswrap', creditsWrap);
    const authorsWrap = createNewElement('div', 'authorswrap', creditsWrap);
    const backWrap = createNewElement('div', 'backwrap', creditsWrap);

    createNewElement('h1', 'creditstitle', titlesWrap, 'we made this!');
    createNewElement('h2', 'creditssubtitle', titlesWrap, 'check our githubs:');

    createNewLink('https://github.com/KamilaGumkowska', 'Kamila Gumkowska', authorsWrap);
    createNewLink('https://github.com/MateuszLepecki', 'Mateusz Łepecki', authorsWrap);
    createNewLink('https://github.com/kcodex', 'Katarzyna Ratajska', authorsWrap);
    createNewLink('https://github.com/sabinarusielik', 'Sabina Rusielik', authorsWrap);
    createNewLink('https://github.com/SebastianSiwek', 'Sebastian Siwek', authorsWrap);
    createNewLink('https://github.com/tarchal', 'Wojciech Tarchalski', authorsWrap);

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
