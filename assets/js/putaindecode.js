/*! Putain de code ! - v0.0.1 - 2013-09-05 */
if(window.addEventListener){var kkeys=[],konami="38,38,40,40,37,39,37,39,66,65";konami_cancel="27",el_konami=null,window.addEventListener("keydown",function(e){if(kkeys.push(e.keyCode),(""+kkeys).indexOf(konami)>=0){kkeys=[],el_konami=document.createElement("div"),el_konami.className="pu-Konami",document.body.appendChild(el_konami);var n=[document.createElement("div"),document.createElement("div")];n[0].className="pu-Konami-content",n[1].className="pu-Konami-content-hiddenPart",n[1].appendChild(document.createTextNode("We've got you !")),n[0].appendChild(n[1]),el_konami.appendChild(n[0])}(""+kkeys).indexOf(konami_cancel)>=0&&el_konami&&(document.body.removeChild(el_konami),el_konami=null)},!0)}console&&console.log&&console.log("Coucou, pour le code source c'est par là https://github.com/putaindecode/website - Bisous");