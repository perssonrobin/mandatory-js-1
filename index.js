//The previous developer thought the company is named Fruits & Bananas Corp, but it's actually called Fruits & Vegetables Corp
//Text content in header h1 is wrong, should be Fruits & Vegetables Corp (see first issue)

let h1 = document.querySelector("header h1");
header.textContent = "Fruits & Vegetables Corp";

//The last a tag in header ul has wrong text content and href attribute (should be Vegetables and not Bananas)
let li3 = document.querySelectorAll("a[href='#bananas']")[0];
li3.innerHTML = "Vegetables";
li3.href = "#vegetables";

// The section #contact and #about are in the wrong order. Swap them.
let contact = document.querySelector("#contact");
let about = document.querySelector("#about");
contact.parentNode.insertBefore(about, contact);

//Each section should have a h2 tag at the top with corresponding text according to its id
let aboutH2 = document.createElement("h2");
aboutH2.innerHTML = "About";
about.insertBefore(aboutH2, about.childNodes[0]);

let contactH2 = document.createElement("h2");
let contact = document.getElementById("contact");
contactH2.innerHTML = "Contact";
contact.insertBefore(contactH2, contact.childNodes[0]);

//The text "We're the best in fruits & vegetables" under #about should be wrapped in a ptag
let aboutText = document.querySelector("#about").textContent;
document.querySelector("#about").innerHTML = "<p>" + aboutText + "</p>";

//The developer used td elements in thead instead of th. Fix it.
for (let i = 0; i < tHeadItems.length; i++){
  tHeadCell = document.createElement('th');
  tHeadCell.innerHTML = tHeadItems[i].innerHTML;
  tHeadItems[i].parentElement.replaceChild(tHeadCell, tHeadItems[i]);
}
//The developer forgot to include the main.css file. Add it to head.
let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'main.css');
head.appendChild(link);

//Head title is wrong
let title = document.querySelector('title');
title.textContent = "Fruits & Vegetables Corp";
