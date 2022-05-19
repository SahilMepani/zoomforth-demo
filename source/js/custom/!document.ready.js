// Media queries constant
const smMinMq   = window.matchMedia( '(min-width: 576px)' );
const mdMinMq   = window.matchMedia( '(min-width: 768px)' );
const lgMinMq   = window.matchMedia( '(min-width: 992px)' );
const xlMinMq   = window.matchMedia( '(min-width: 1200px)' );
const xxlMinMq  = window.matchMedia( '(min-width: 1400px)' );
const xxxlMinMq = window.matchMedia( '(min-width: 1600px)' );
const smMaxMq   = window.matchMedia( '(max-width: 575px)' );
const mdMaxMq   = window.matchMedia( '(max-width: 767px)' );
const lgMaxMq   = window.matchMedia( '(max-width: 991px)' );
const xlMaxMq   = window.matchMedia( '(max-width: 1199px)' );
const xxlMaxMq  = window.matchMedia( '(max-width: 1399px)' );
const xxxlMaxMq = window.matchMedia( '(max-width: 1599px)' );


/*=================================
=            UA Parser            =
=================================*/
// https://github.com/faisalman/ua-parser-js
// var parser = new UAParser();
// var result = parser.getResult();
// console.log( result.browser.name );
// console.log( parseInt( result.browser.version.split( '.' )[ 0 ], 10 ) );
// console.log( result.device.type );
// console.log( result.os.name );
// console.log( result.os.version );


jQuery( document ).ready( function ( $ ) {