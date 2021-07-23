var factList = [
  "People living in the poorest SES (social-economic status) areas have 2.5 times the exposure to fast-food restaurants as those living in the wealthiest areas. (Yeh, Ming-Chen and David L. Katz,2015)",/*0*/
  "Approximately 2.3 million people (2.2% of all US households) live in low-income, rural areas that are more than 10 miles from a supermarket. (USDA, 2015)",/*1*/
  "White neighborhoods contain an average of four times as many supermarkets as predominantly black ones do, and that grocery stores in African-American communities are usually smaller with less selection. (PubMed.gov, 2011)",/*2*/
  "Food deserts can be found in 371 California census tracts, according to USDA data. The vast majority - 85 percent - are in urban areas. More than 1.9 million people live in these census tracts, and about half of them have low access to retail food stores. (Huffpost, 2011)"
  ];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
  myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
};
