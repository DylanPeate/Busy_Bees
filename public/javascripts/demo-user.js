
window.addEventListener('DOMContentLoaded', async() => {

  if (!document.referrer) {
    const newspaperSpinning = [
      { transform: 'scale(1.0)' },
      { transform: 'scale(1.01)'},
      { transform: 'scale(1.0)'}
    ]

    const newspaperTiming = {
      duration: 250,
      iterations: 1,
    }


    let demoEmail = 'demo@email.com';
    let demoPass = 'demopassword';

    const emailInput = document.querySelector('.inputBox-log');
    const passwordInput = document.querySelectorAll('.inputBox-log')[1];
    const loginBtn = document.getElementById('login-button-log');

    emailInput.value = '';
    passwordInput.value = '';

    let num = 0;
    const myInterval = setInterval(() => {
      emailInput.value += demoEmail[num];

      if (num === demoEmail.length - 1) {
          clearInterval(myInterval);

          let passNum = 0
          const passInterval = setInterval(() => {
          passwordInput.value += demoPass[passNum];

          if (passNum === demoPass.length - 1) {
            clearInterval(passInterval)

            setTimeout(() => {
              loginBtn.animate(newspaperSpinning, newspaperTiming)
            }, 100)
          }
          passNum++;
        }, 50);
      }
      num++
    }, 50)
  }
})