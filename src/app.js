/* eslint-disable */
import "bootstrap";
import "./styles.css";

window.onload = function() {
  let who = ["My Dog", "My Phone", "My Tire", "You"];
  let action = ["Ate", "Battery", "Is", "Called Me"];
  let what = ["My Homework", "Died", "Flat", "Too Late"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  //Coding Guidelines Challenge: placed each each into a variable

  let whoItem = who[whoIndex];
  let actionItem = action[actionIndex];
  let whatItem = what[whatIndex];

  let myExcuse = whoItem + " " + actionItem + " " + whatItem;

  // my orignal code:
  // let myExcuse =
  // who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex];

  document.getElementById("excuse").innerHTML = myExcuse;
};
