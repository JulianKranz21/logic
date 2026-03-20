let x = 15;
let y = 10;

if (x > y) {
  console.log("1. x ist größer als y");
} else {
  console.log("1. x ist nicht größer als y");
}

let passwort = "geheim";
if (passwort === "geheim") {
  console.log("2. Zugriff gewährt");
} else {
  console.log("2. Falsches Passwort");
}

let status = "offline";
if (status !== "online") {
  console.log("3. Der Benutzer ist nicht verbunden");
} else {
  console.log("3. Der Benutzer ist online");
}

let zahl = 8;
if (zahl % 2 === 0) {
  console.log("4. Die Zahl ist gerade");
} else {
  console.log("4. Die Zahl ist ungerade");
}

let alter = 17;
if (alter >= 18) {
  console.log("5. Du bist volljährig");
} else {
  console.log("5. Du bist minderjährig");
}

let username = "Max";
if (username.length < 5) {
  console.log("6. Der Benutzername ist zu kurz");
} else {
  console.log("6. Der Benutzername ist lang genug");
}

let istRegnerisch = true;
if (istRegnerisch) {
  console.log("7. Nimm einen Regenschirm mit");
} else {
  console.log("7. Du brauchst keinen Schirm");
}

let temperatur = -5;
if (temperatur < 0) {
  console.log("8. Es friert");
} else {
  console.log("8. Es ist wärmer als 0 Grad");
}

let hatTicket = true;
let istNuechtern = true;
if (hatTicket && istNuechtern) {
  console.log("9. Du darfst auf das Konzert");
} else {
  console.log("9. Einlass verweigert");
}

let istWochenende = false;
let hatUrlaub = true;
if (istWochenende || hatUrlaub) {
  console.log("10. Du kannst ausschlafen");
} else {
  console.log("10. Der Wecker klingelt früh");
}

let einkaufsliste = ["Brot", "Milch"];
if (einkaufsliste.length === 0) {
  console.log("11. Die Liste ist leer");
} else {
  console.log("11. Es stehen Dinge auf der Liste");
}

let satz = "Hallo Welt, wie geht es dir?";
if (satz.includes("Welt")) {
  console.log("12. Das Wort 'Welt' wurde gefunden");
} else {
  console.log("12. Wort nicht gefunden");
}

let wert = 5;
if (wert >= 1 && wert <= 10) {
  console.log("13. Der Wert ist gültig (zwischen 1 und 10)");
} else {
  console.log("13. Der Wert ist ungültig");
}

let unbekannt = 42;
if (typeof unbekannt === "number") {
  console.log("14. Das ist eine Zahl");
} else {
  console.log("14. Das ist keine Zahl");
}

let kontostand = 50;
let preis = 75;
if (kontostand >= preis) {
  console.log("15. Kauf erfolgreich");
} else {
  console.log("15. Nicht genug Guthaben");
}

let eingabe = "";
if (eingabe === "") {
  console.log("16. Bitte gib etwas ein!");
} else {
  console.log("16. Eingabe wurde akzeptiert");
}

let seiteA = 3;
let seiteB = 4;
let flaeche = seiteA * seiteB;
if (flaeche > 10) {
  console.log("17. Die Fläche ist größer als 10");
} else {
  console.log("17. Die Fläche ist 10 oder kleiner");
}

let buchstabe = "a";
if (buchstabe === "a" || buchstabe === "e" || buchstabe === "i" || buchstabe === "o" || buchstabe === "u") {
  console.log("18. Der Buchstabe ist ein Vokal");
} else {
  console.log("18. Der Buchstabe ist ein Konsonant");
}

let link = "https://google.com";
if (link.startsWith("https")) {
  console.log("19. Das ist eine sichere Verbindung");
} else {
  console.log("19. Vorsicht, möglicherweise unsicher");
}

let istAbgeschlossen = false;
if (!istAbgeschlossen) { 
  console.log("20. Die Aufgabe muss noch erledigt werden");
} else {
  console.log("20. Aufgabe ist fertig");
}