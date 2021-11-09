const select = document.querySelector('.change-lang');
const newSelect = document.querySelector('.mobile-change-lang');
const allLang = ['ro', 'ru', 'en', 'sp', 'de'];



select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    $(".change-lang")[0].selectedIndex = allLang.indexOf(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ro';
        
        location.reload();
    }
    
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
    
};

changeLanguage();
//function translate for mobile version

newSelect.addEventListener('change', changeURLLanguageMb);


function changeURLLanguageMb() {
    let lang = newSelect.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeMobileLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    $(".mobile-change-lang")[0].selectedIndex = allLang.indexOf(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ro';
        
        location.reload();
    }
    
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
    
};


changeMobileLanguage();