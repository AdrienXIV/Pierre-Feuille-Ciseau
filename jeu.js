var feuille = document.getElementById('feuille');
var pierre = document.getElementById('pierre');
var ciseau = document.getElementById('ciseau');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');

var choix1 = document.getElementById('choix1');
var choix2 = document.getElementById('choix2');

feuille.addEventListener('click', () => {
    let feuille = 3;
    choix1.setAttribute('src', 'public/feuille.png');
    let choixPnj = entierAleatoire();
    let source= pnj(choixPnj);
    choix2.setAttribute('src', source);
    let resultat = choix(feuille, choixPnj);
    score(resultat);
});

pierre.addEventListener('click', () => {
    let pierre = 2;
    choix1.setAttribute('src', 'public/pierre.png');
    let choixPnj = entierAleatoire();
    let source= pnj(choixPnj);
    choix2.setAttribute('src', source);
    let resultat = choix(pierre, choixPnj);
    score(resultat);
});

ciseau.addEventListener('click', () => {
    let ciseau = 1;
    choix1.setAttribute('src', 'public/ciseau.png');
    let choixPnj = entierAleatoire();
    let source= pnj(choixPnj);
    choix2.setAttribute('src', source);
    let resultat = choix(ciseau, choixPnj);
    score(resultat);
});

function choix(choixPlayer, choixPnj) {
    let pnj = 1;
    let player = 2;
    if (choixPlayer == 1 && choixPnj == 2) {
        return pnj;
    } else if (choixPlayer == 1 && choixPnj == 3) {
        return player;
    } else if (choixPlayer == 2 && choixPnj == 1) {
        return player;
    } else if (choixPlayer == 2 && choixPnj == 3) {
        return pnj;
    } else if (choixPlayer == 3 && choixPnj == 1) {
        return pnj;
    } else if (choixPlayer == 3 && choixPnj == 2) {
        return player;
    } else if (choixPlayer == choixPnj) {
        return 3;
    }
}

var a=0;
var b=0;
function score(choix) {
    if (choix == 2) {
        a++;
        score1.innerText = '';
        score1.innerText = a;
    } else if (choix == 1) {
        b++;
        score2.innerText = '';
        score2.innerText = b;

    } 
}

function entierAleatoire() {
    let max = 3;
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pnj(entier) {
    let ciseau = 'public/ciseau.png';
    let pierre = 'public/pierre.png';
    let feuille = 'public/feuille.png';

    if (entier == 1) {
        return ciseau;
    } else if (entier == 2) {
        return pierre;
    } else if (entier == 3) {
        return feuille;
    }
}