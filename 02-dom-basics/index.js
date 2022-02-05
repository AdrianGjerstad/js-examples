function main() {
  setTimeout(function() {
    document.querySelector("#myP").innerText = "Hello :)";
  }, 5000);  // 5000ms or 5sec
}

window.onload = main;

