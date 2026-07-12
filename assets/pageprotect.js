/* P A G E - P R O T E C T E R */

/* Right-Click */
document.addEventListener('contextmenu', function(e) {
e.preventDefault();
});

/* F12 */
document.addEventListener('keydown', function(e) {
if (e.key === 'F12' || e.keyCode === 123) {
e.preventDefault();
}


var isModifierPressed = e.ctrlKey || e.metaKey;
if (isModifierPressed) {

/* CTRL + S */
if (e.key === 's' || e.key === 'S' || e.keyCode === 83) {
e.preventDefault();
}

/* CTRL + U */
if (e.key === 'u' || e.key === 'U' || e.keyCode === 85) {
e.preventDefault();
}

/* CTRL + SHIFT + I */
if (e.shiftKey && (e.key === 'i' || e.key === 'I' || e.keyCode === 73)) {
e.preventDefault();
}
}
});