/* P A G E - P R O T E C T E R */
/* CTRL + C */
document.addEventListener('contextmenu', function(e) {
e.preventDefault();
});

document.addEventListener('copy', function(e) {
e.preventDefault();
alert("a beginning to an end none will see");
});

/* CTRL + S */
document.addEventListener('cut', function(e) {
e.preventDefault();
});

document.addEventListener('keydown', function(e) {
var isModifierPressed = e.ctrlKey || e.metaKey;

if (isModifierPressed && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
e.preventDefault();
alert("a rabbit hole older then the rabbit that burrowed it");
}
});