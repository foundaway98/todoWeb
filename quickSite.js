const quickSiteContainer = document.querySelector('#quick-site-container');
const quickSiteAdder = document.querySelector('#quick-site-adder');
const quickSiteAddForm = document.querySelector('#quick-site-add-form');

const quickSiteURL = document.querySelector('#quick-site-url');
const quickSiteTitle = document.querySelector('#quick-site-title');

const QUICK_SITES_KEY = 'quick-site';

let quickSites = [];

function saveQuickSite() {
    localStorage.setItem(QUICK_SITES_KEY, JSON.stringify(quickSites));
}

function showQuickSiteAdder() {
    quickSiteAddForm.style.visibility === 'hidden' ? (quickSiteAddForm.style.visibility = '') : (quickSiteAddForm.style.visibility = 'hidden');
}

function addQuickSite(event) {
    event.preventDefault();
    const newQuickSiteObj = {
        url: quickSiteURL.value,
        title: quickSiteTitle.value,
    };
    quickSites.push(newQuickSiteObj);
    paintQuickSite(newQuickSiteObj);
    saveQuickSite();
}

function paintQuickSite(newQuickSiteObj) {
    const div = document.createElement('div');
    div.classList.add('quick-site-content');
    div.addEventListener('click', () => {
        window.open(newQuickSiteObj.url);
    });

    const img = document.createElement('img');
    img.src = '/shortcut.png';
    img.alt = 'shortcut_img';
    img.classList.add('quick-site-icon');

    const p = document.createElement('p');
    p.innerText = newQuickSiteObj.title;

    div.appendChild(img);
    div.appendChild(p);
    quickSiteContainer.append(div);
}

quickSiteAdder.addEventListener('click', showQuickSiteAdder);
quickSiteAddForm.addEventListener('submit', addQuickSite);

const savedQuickSites = localStorage.getItem(QUICK_SITES_KEY);
if (savedQuickSites) {
    const parsedQuickSites = JSON.parse(savedQuickSites);
    quickSites = parsedQuickSites;
    parsedQuickSites.forEach(paintQuickSite);
}
