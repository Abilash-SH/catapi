//BODY COLOR

document.body.style.backgroundColor = "#7dd3e3";

//DIV ELEMENT

var div = document.createElement("div");
document.body.append(div);

//CAT API HEADING

var h1 = document.createElement("h1");
h1.innerText = "CAT API";
h1.style.paddingTop = "30px"
h1.setAttribute("class", "display-5 mt-2");

//CAT API STYLE

h1.style.wordSpacing = "5px";
h1.style.fontFamily = "'Azeret Mono'";
h1.style.color = "black ";
h1.style.textAlign = "center";
div.append(h1);

var h2 = document.createElement("h2");
div.append(h2);
h2.style.textAlign = "center";
h2.style.padding = "10px";

//HR LINE AND STYLE

var line = document.createElement("hr");
line.style.height = "5px";
line.style.color = "black";
line.style.marginLeft = "-10px";
line.style.marginRight = "-10px"
h2.append(line);

//DESCRIPTION

var text = document.createElement("p");
text.innerHTML =
    "This Page Is Used To Fetch Cat Images By Giving The Description Of Cat <br><br>Type Your Description Below From The Following <br><br> Cat, Fail, Cute, Kitten, Orange, Gif Etc";
div.append(text);

//DESCRIPTION STYLING

text.setAttribute("class", "h4");
text.style.fontFamily = "'Zen Loop', cursive";
text.style.fontSize = "30px";
text.style.fontWeight = "bold";
text.style.textAlign = "center";

//INPUT DIV

var input_div = document.createElement("div");
div.append(input_div);

//INPUT DIV STYLING

input_div.style.textAlign = "center";

//INPUT BOX

var input = document.createElement("input");
input.setAttribute("id", "search-box");
input.setAttribute("placeholder", "Keywords");
input.setAttribute("class", "input form-control-lg mt-3 mb-3");
input_div.append(input);

//INPUT BOX STYLING

input.style.border = "1px solid white";
input.style.borderRadius = "10px 10px 10px 10px";

//SEARCH BUTTON

var search = document.createElement("button");
search.innerText = "Search";
search.setAttribute("onclick", "getKeyword()");
search.setAttribute("class", "btn btn-secondary");
search.setAttribute("type", "button");
input_div.append(search);

//SEARCH BUTTON STYLING

search.style.marginLeft = "15px";

//DATA DISPLAY DIV

var div2 = document.createElement("div");
div2.setAttribute("class", "conatiner-lg");
div2.setAttribute("id", "d2");
div2.style.margin = "-4px";
div2.style.textAlign = "center";
div2.style.fontFamily = "'Comic Neue', cursive";
div2.style.fontSize = "20px";
document.body.append(div2);

//ASYNC FUNCTION FOR SUBMIT

async function fetchCatData(url) {
    const response = await fetch(url)
    return response.json();
}

//REFRESH BUTTON

var refresh = document.createElement("button");
refresh.style.marginLeft = "10px"
refresh.innerText = "Refresh";
refresh.setAttribute("onclick", "reload()")
refresh.setAttribute("class", "btn btn-secondary");
refresh.setAttribute("type", "button");
input_div.append(refresh);

//SEARCH FUNCTION

const getKeyword = () => {
    let keyword = document.getElementById("search-box").value;
    document.getElementById("search-box").value = " ";
    console.log(keyword);

    // FETCH CAT DATA

    fetchCatData("https://cataas.com/api/cats?tags=" + keyword).then((data) => {
        if (data.length == 0) {
            let errorMessage = document.createElement("h1");
            errorMessage.innerText = "No Results For Your Keyword";
            document.body.appendChild(errorMessage);
            errorMessage.style.textAlign = "center";
            return;
        }
        else {
            data.map((cat, index) => {
                let contDiv = document.createElement('div');
                contDiv.setAttribute("class", "container");
                let rowDiv = document.createElement('div');
                rowDiv.setAttribute("class", "row");
                rowDiv.setAttribute("class", "my-2")
                let colDiv = document.createElement("div");
                colDiv.setAttribute("class", "col");
                colDiv.setAttribute("align", "center");


                let imgUrl = "https://cataas.com/cat/" + cat.id;
                console.log(imgUrl);
                var img = document.createElement("IMG");
                img.setAttribute("src", imgUrl);
                img.setAttribute("class", "cat");
                img.setAttribute("width", "600px");
                img.setAttribute("height", "600px");


                document.body.appendChild(contDiv);
                contDiv.appendChild(rowDiv);
                rowDiv.appendChild(colDiv);
                colDiv.appendChild(img);
            })
        }
    })
}

// RESET FUNCTION

function reload() {
    location.reload();
}
