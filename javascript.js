//siden er loadet: sidenVises

$(window).on("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPåMenubutton);


}

function trykPåMenubutton() {
    console.log("trykPåMenubutton");
    $("nav").toggleClass("hidden");
    $(".menubutton").toggleClass("kryds");


}// JavaScript Document