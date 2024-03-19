/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi madre", "Mi amigo", "Mi vecino", "Mi perro"];
let action = ["come", "corre", "grita", "bebe"];
let what = ["mi comida", "muy rapido", "muy fuerte"];
let when = [
  "despues de trabajar",
  "cuando tiene prisa",
  "cuando se enfada",
  "cuando tiene mucha sed"
];
let nuevaexcusa = `${who[Math.floor(Math.random() * who.length)]} ${
  action[Math.floor(Math.random() * action.length)]
} ${what[Math.floor(Math.random() * what.length)]} ${
  when[Math.floor(Math.random() * when.length)]
}`;
window.onload = document.getElementById("nuevaexcusa").innerHTML = nuevaexcusa;

