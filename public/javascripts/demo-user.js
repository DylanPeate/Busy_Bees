document.addEventListener('DOMContentLoaded', async() => {

    if (document.referrer === 'http://localhost:8080/') {
    console.log("DEMO")
    }
  let demoEmail = 'demo@email.com';
  let demoPass = 'demopassword';


  //demo@email.com 
  // demopassword
  const emailInput = document.querySelector('.inputBox-log');

  console.log(document.referrer)
})