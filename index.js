//The previous developer thought the company is named Fruits & Bananas Corp, but it's actually called Fruits & Vegetables Corp
//Text content in header h1 is wrong, should be Fruits & Vegetables Corp (see first issue)

document.querySelector("h1").textContent = "Fruits & Vegetables Corp";

//The last a tag in header ul has wrong text content and href attribute (should be Vegetables and not Bananas)
let bananas = document.createElement('a');
bananas.setAttribute ('href', "#Vegetables");
bananas.innerHTML = "Vegetables";

let vegetables = document.querySelectorAll("li");
for (let i = 0; i < vegetables.length; i++) {
  vegetables[2].textContent = "";
  vegetables[2].appendChild(bananas);
}

// The section #contact and #about are in the wrong order. Swap them.

let main = document.querySelector('#main');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
about.textContent = "";
main.insertBefore(about, contact);


//Each section should have a h2 tag at the top with corresponding text according to its id
let aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About";
about.appendChild(aboutTitle);

let contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";
contact.appendChild(contactTitle);
contact.insertBefore(contactTitle, contact.querySelector("p"));

//The text "We're the best in fruits & vegetables" under #about should be wrapped in a ptag
let pTag = document.createElement('p');
about.appendChild(pTag);
pTag.textContent = ("We're the best in fruits & vegetables");

//The developer used td elements in thead instead of th. Fix it.
let swap = document.querySelectorAll("thead td");
for (let td of swap) {
  let result = document.createElement("th");
  result.textContent= td.textContent;
  td.replaceWith(result);
}
//The developer forgot to include the main.css file. Add it to head.
let head = document.querySelector('head');
let link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'main.css');
head.appendChild(link);

//Head title is wrong
let titleA = document.querySelector("title");
titleA.textContent = "Fruits & Vegetables Corp";
