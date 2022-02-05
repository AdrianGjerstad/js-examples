// If it weren't for the fact that this script is loaded before the page is
// done loading, i.e. the body hasn't been loaded yet, the code inside main
// could be placed outside.

function main() {
  alert("Hello, world!");
}

window.onload = main;

