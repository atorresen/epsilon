//header
const header = document.createElement("section");
header.className = "header";
document.body.insertAdjacentElement("afterbegin", header);
const titlediv = document.createElement("div");
header.appendChild(titlediv);

var filename = location.href.split("/").slice(-1)[0];
if (filename.includes("index") || filename.includes("about")) {
	const maintitle = document.createElement("h1");
	maintitle.innerText = "waste < ε";
	titlediv.appendChild(maintitle);
	titletext = "<span style='white-space:nowrap'>a mathematician</span> <span style='white-space:nowrap'>approaches zero waste</span>";
	var up = "";
} else {
	// file names are the desired post title with "-" for spaces and ？for ?
	titletext = (filename.split(".html")[0]).replaceAll("-", " ").replaceAll("%EF%BC%9F", "?");
	var up = "../";
};

const button = document.createElement("a");
if (filename.includes("index")) {
	var buttoninfo = ["about", "about.html"];
} else {
	var buttoninfo = ["home", up + "index.html"];
};
button.className = "button";
button.innerText = buttoninfo[0];
button.href = buttoninfo[1];
titlediv.appendChild(button);

const title = document.createElement("h2");
title.innerHTML = titletext;
titlediv.appendChild(title);


//date & footer
const content = document.getElementById("content");

const spacer = document.createElement("div");
spacer.className = "spacer";
var date = new Date(document.lastModified);
spacer.textContent = "last updated " + new Intl.DateTimeFormat("en-GB", {dateStyle: "medium"}).format(date);
content.appendChild(spacer);

const footer = document.createElement("section");
footer.className = "footer";
const badgediv = document.createElement("div");
badgediv.className = "carbonbadge";
badgediv.id = "wcb";
const badgescript = document.createElement("script");
badgescript.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
badgescript.defer = true;
footer.appendChild(badgediv);
footer.appendChild(badgescript);
content.insertAdjacentElement("afterend", footer);
