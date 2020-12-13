let xml = "<?xml version = '1.0'?> <div>Koniakhovich Maksim 2-9 FIT</div>";
let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xml, "text/xml");
let names = xmlDoc.getElementsByTagName("div");
let footer = document.getElementsByClassName("innerXML");
footer[0].innerHTML = names[0].innerHTML;