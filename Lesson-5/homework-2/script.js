let card = document.createElement("div");
let h2 = document.createElement("h2");
let link = document.createElement("a");

h2.innerText ="Gendalf";
link.innerText = "Go To Profile"
card.setAttribute("id", "card")
link.setAttribute("href", "#")
card.append(h2, link)

document.body.append(card)