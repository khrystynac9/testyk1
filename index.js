function myFunction() {
  var d = [];
  var sum = 0;
  var k;
  var i;
  var a =document.querySelector('input[name="ask1"]:checked').value;
  d.push(a);
  var b =document.querySelector('input[name="ask2"]:checked').value;
  d.push(b);
  var c =document.querySelector('input[name="ask3"]:checked').value;
  d.push(c);
  console.log(d);
  for (i = 0; i < d.length; i++) {
    if (d[i] == "a") {
      k = 3;
    } else if (d[i] == "b") {
      k = 2;
  } else {
      k =1;
  }
  sum = sum + k;
  }
  console.log(d);
  console.log(sum);
 /* 
  switch (sum) {
    case (sum < 4):
      console.log("3");
      break;
      
    case (sum >= 4 && sum <= 6):
      console.log("5");
      break;
    case (sum >= 7):
      console.log(8);
      break;
  } 
  */
  
    if (sum < 4) {
      //console.log("3");
      document.getElementById("demo").innerHTML = "Ви не дуже піклуєтеся про те, як ви їсте. Вам треба терміново міняти свої звички. Не сідайте за стіл, коли втомилися чи знервовані. Їжте поволі, ретельно пережовуючи їжу, - це дозволить вам не переїдати. Візьміть собі за правило припиняти прийом їжі не менше ніж за дві години до сну.";
    } else if (sum >= 4 && sum <= 6) {
      console.log("5");
    } else {
      console.log(8);
  } 
 }


