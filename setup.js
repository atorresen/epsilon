
const content = document.getElementById("content");

const spacer = document.createElement("div");
spacer.className = "spacer";
var date = new Date(document.lastModified);
spacer.textContent = "last updated " + new Intl.DateTimeFormat("en-GB", {dateStyle: "medium"}).format(date);
content.appendChild(spacer);

const footer = document.createElement("section");
footer.className = "footer";
footer.insertAdjacentHTML("afterbegin",
	"<div></div>"
)
content.insertAdjacentElement("afterend", footer);
