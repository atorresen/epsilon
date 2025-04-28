function keywords(title) {
	var kws = "";
	var cats = ""; //personal, home, food, theory, policy, getting started, etc. (TBD)
	switch(title) {
		case "taking a shower":
			kws = "bar soap shampoo bar conditioner bar";
			cats = "personal, home"
			break;
		case "minimal essentials":
			kws = "to go kit spork necessary minimal set messy";
			cats = "getting started, personal"
			break;
		case "the upstream impact":
			kws = "test"
			cats = "theory, getting started"
			break;
	};
	return(title + " " + kws + " " + cats)
};

function search() {
	let input = document.getElementById("searchbar").value;
	input = input.toLowerCase();
	let x = document.getElementsByClassName("title");

	for (i = 0; i < x.length; i++) {
		var title = x[i].innerText;
		var kws = keywords(title);
		if (!kws.includes(input)) {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "list-item";
		}
	}
}
