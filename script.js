var log = document.getElementById('login');
var reg = document.getElementById('register');
var btn = document.getElementById('btn');
var btnlog = document.getElementById('btn-log');
var btnreg = document.getElementById('btn-reg');

var seeL = document.getElementById('eye-seeL');
var hideL = document.getElementById('eye-hideL');
var seeR = document.getElementById('eye-seeR');
var hideR = document.getElementById('eye-hideR');
var passL = document.getElementById('passwordL');
var passR = document.getElementById('passwordR');

function register() {
    log.style.left = "-400px";
    btnlog.style.color = "black";
    reg.style.left = "50px";
    btnreg.style.color = "white";
    btn.style.left = "100px";
}

function login() {
    log.style.left = "50px";
    btnlog.style.color = "white";
    reg.style.left = "450px";
    btnreg.style.color = "black";
    btn.style.left = "0";
}

function eyeseeL() {
    // see.style.opacity = "0";
    seeL.style.right = "-25px";
    // hide.style.opacity = "100%";
    hideL.style.right = "-25px";

    passL.type = "text";
}

function eyehideL() {
    // see.style.opacity = "100%";
    seeL.style.right = "0";
    // hide.style.opacity = "0";
    hideL.style.right = "-50px";

    passL.type = "password";
}

function eyeseeR() {
    // see.style.opacity = "0";
    seeR.style.right = "-25px";
    // hide.style.opacity = "100%";
    hideR.style.right = "-25px";

    passR.type = "text";
}

function eyehideR() {
    // see.style.opacity = "100%";
    seeR.style.right = "0";
    // hide.style.opacity = "0";
    hideR.style.right = "-50px";

    passR.type = "password";
}