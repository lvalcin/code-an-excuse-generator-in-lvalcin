/* eslint-disable */
import "bootstrap";
import "./styles.css";

window.onload = function() {
  let who = ["My Dog", "My Phone", "My Tire", "You"];
  let action = ["Ate", "Battery", "Is", "Called Me"];
  let what = ["My Homework", "Died", "Flat", "Too Late"];

  let myExcuse = who.concat(action, what);
  document.getElementById("excuse").innerHTML = myExcuse;
};
