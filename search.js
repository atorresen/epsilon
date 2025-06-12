// creates the list of post topics and the search functionality
// to add a post:
///// - copy the html template in the /pages folder and add new content
///// - name the new file with the desired title with "-" for spaces and "？"for "?"
///// - add a new <li> element on index.html as follows:
/////				<li class="title"><a href="pages/your-new-title.html"></a></li>
/////	- add new page's keywords and categories in the keywords() function below


// post titles that link to post pages
function titleFromFilename(a) {
	var res = a.split(".html")[0];
	res = res.split("pages/").slice(-1)[0];
	res = res.replaceAll("-", " ");
	res = res.replaceAll("%EF%BC%9F", "?");
	return(res)
};

const lis = document.getElementsByClassName("title");
for (var t of lis) {
	var a = t.innerHTML;
	var title = titleFromFilename(a);
	t.innerHTML = a.slice(0, -4) + title + "</a>";
};


// search
function search() {
	let input = document.getElementById("searchbar").value;
	input = input.toLowerCase();
	for (t of lis) {
		var kws = keywords(t);
		if (!kws.includes(input)) {
			t.style.display = "none";
		} else {
			t.style.display = "list-item";
		}
	}
};

function keywords(t) {
	var title = t.innerHTML;
	title = titleFromFilename(title);
	var kws = "";
	var cats = ""; //personal, home, food, theory, policy, getting started, etc. (TBD)
	switch(title) {
		case "taking a shower":
			kws = "bar soap shampoo bar conditioner bar";
			cats = "personal, home";
			break;
		case "minimal essentials":
			kws = "to go kit spork necessary minimal set messy";
			cats = "getting started, personal";
			break;
		case "good things happen when you compost":
				kws = "food waste food scraps vermicompost decompose";
				cats = "food, home, getting started";
				break;
		case "decolonizing convenience":
			kws = "alice plane huma gupta activating change inconvenience colonial lead";
			cats = "theory, personal, poem";
			break;
		case "the upstream impact":
			kws = "test";
			cats = "theory, getting started";
			break;
		case "normative inequalities":
			kws = "> < = inequality";
			cats = "theory, personal, poem";
			break;
	};
	return(title + " " + kws + " " + cats)
};
