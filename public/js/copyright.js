var today = new Date();
var copyrightYear = today.getFullYear();

var copyrightTextElement = document.getElementById("copyrightText");

copyrightTextElement.textContent = `${'\u00A9'} Kyle Gibbs ${copyrightYear}`
