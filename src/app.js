/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let h = 0; h < adj.length; h++) {
      for (let j = 0; j < noun.length; j++) {
        for (let k = 0; k < ext.length; k++) {
          console.log(pronoun[i] + adj[h] + noun[j] + ext[k]);
        }
      }
    }
  }
};
