/*---------------------------------------*/

var phrases = ["Hi, I'm Edwin Saul :)","software developer","let's go to code"];

function put_text(text){
    var button = document.getElementById("hi_im_Edwin_Saul");
    button.innerHTML="<h1>"+text+"</h1>";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*---------------------------------------*/
function see_a_phrase(phrase){
  put_text(phrase+"..")
}
/*---------------------------------------*/

async function Hi_im_Edwin_Saul() {
  await  see_a_phrase("Hi, Im Edwin Saul :)")
  await  sleep(3000);
  await  see_a_phrase("software developer")
  await  sleep(3000);
  await  see_a_phrase("let's go to code")
  await  sleep(3000);
  await  Hi_im_Edwin_Saul();
}
/*-----------------------------------------*/
Hi_im_Edwin_Saul()
