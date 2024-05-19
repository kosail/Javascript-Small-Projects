// Setting the body background color to black, because the blur effect of the bgImage makes a weird white border.
document.body.style.backgroundColor = "black";
document.body.style.fontFamily = "SF Pro Display";

// Styling background image
let bgImage = document.createElement('div');
bgImage.setAttribute("id", "bgImage");

bgImage.style.backgroundImage = "url(\"https://i.redd.it/gp5q4q5svk0d1.jpeg\")";
bgImage.style.backgroundRepeat = "no-repeat";
bgImage.style.backgroundSize = "cover";
bgImage.style.filter = "blur(5px)";

bgImage.style.position = "fixed";
bgImage.style.inset = "0px";
bgImage.style.width = "100vw";
bgImage.style.height = "100vh";
bgImage.style.margin = "auto";

document.body.appendChild(bgImage);


// Adding main div which will contain everything and will be centered.
let contentMainDiv = document.createElement('div');
contentMainDiv.setAttribute("id", "contentMainDiv");

contentMainDiv.style.position = "fixed";
contentMainDiv.style.inset = "0px";
contentMainDiv.style.width = "30rem";
contentMainDiv.style.height = "12rem";
contentMainDiv.style.maxWidth = "100vw"
contentMainDiv.style.maxHeight  ="100vh";
contentMainDiv.style.margin = "auto";

contentMainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
contentMainDiv.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
contentMainDiv.style.padding = "10px 30px 10px 20px";
contentMainDiv.style.borderRadius = "15px";


// Creating the label and it's text node. Styling and appending them together
let titleLabel = document.createElement('p');
titleLabel.setAttribute("id", "titleLabel");

titleLabel.style.color = "white";
titleLabel.style.fontSize = "1.25em";
titleLabel.style.textAlign = "center";

// The mentioned text node...
let titleLabelText = document.createTextNode("A Simple Word Counter");
titleLabel.appendChild(titleLabelText);


// Creating the form which will contain the input field and the button
let inputForm = document.createElement("form");
inputForm.setAttribute("id", "inputForm");


// Creating the input field
let inputField = document.createElement("input");
inputField.setAttribute("id", "inputField");

inputField.type = "text";
inputField.placeholder = "Write something here...";

inputField.style.height = "1.7rem";
inputField.style.width = "100%";


// Creating the button to send the form
let inputFieldButton = document.createElement("button");
inputFieldButton.setAttribute("id", "inputFieldButton");
inputFieldButton.setAttribute("type", "submit");

inputFieldButton.style.width = "30%";
inputFieldButton.style.height = "5%";
inputFieldButton.style.margin = "10px 35%";

inputFieldButton.style.fontSize = "1.1em";


// Button's text
let buttonText = document.createTextNode("Count words");
inputFieldButton.appendChild(buttonText);

inputForm.appendChild(inputField);
inputForm.appendChild(inputFieldButton);

// Results printing on screen
let results = document.createElement("p");
results.setAttribute("id", "results");

results.style.color = "red";
results.style.textAlign = "center";

let resultsText = document.createTextNode("Count: 0");
results.appendChild(resultsText);


// Appending all together
document.body.appendChild(contentMainDiv);
contentMainDiv.appendChild(titleLabel);
contentMainDiv.appendChild(inputForm);
contentMainDiv.appendChild(results);

// ---------------------------------------------------- //
// STYLING SECTION END
// ---------------------------------------------------- //


// Handle the form's action. Send the text and check the count of words
inputForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior, which is clean the input field
	let results = document.getElementById("results");
    let countOfWords = inputField.value;

	if (countOfWords.trim() == "") {
		countOfWords = 0;
		results.style.color = "red";
	} else {
		countOfWords = countOfWords.trim().split(" ").length;
		results.style.color = "white";
	}

	
	results.textContent = `Count: ${countOfWords}`;

});