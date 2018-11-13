const man = document.getElementById("berry");
man.style.backgroundColor = "red";
console.log(man);
console.log("I found the berry: " + man.innerHTML);

const app =  document.querySelector('ul.fruits li[data-foodtype="squishy"]');
app.style.backgroundColor = "orange";
console.log(app);
console.log("I found the fruit: " + app.innerHTML);

const lis = document.getElementsByTagName("li");
console.log(lis);

const tau = [];
console.log("Using the for loop here: ");
for (i=0; i<6; i++) {
  const hed = document.getElementsByTagName("li")[i];
  hed.style.width = "100px";
  hed.style.listStyleType = "none";
  console.log(hed.innerHTML);
  if (hed.innerHTML==="Pear") {
    hed.style.backgroundColor = "green";
  }
}

const fru = document.querySelectorAll("li");
console.log(fru);

console.log("Using forEach here:");


fru.forEach(function(hetelma) {
  console.log(hetelma.innerHTML);
  hetelma.style.borderStyle = "solid";
});
