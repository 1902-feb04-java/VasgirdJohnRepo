
 let correct_Username = 'admin';
 let correct_Password = 'admin';
 window.sessionStorage.clear();
 window.sessionStorage.setItem(correct_Username, correct_Password);

 window.addEventListener('DOMContentLoaded', () =>{
    s = document.getElementById('form');
    r = document.getElementById('register');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    s.addEventListener('submit', (e) =>
   {
      //e.preventDefault();
      let pass = window.sessionStorage.getItem(username.value);
      console.log(pass);
      if (pass == password.value)
      {
         return;
      }
      else{
         if (pass === null)
         {
            alert('Cannot find Username');
         }
         else if (password.value !== pass)
         {
            alert('Incorrect Password for username');
         }
      e.preventDefault();
      }
   });
   r.addEventListener('submit', (e)=>{
      e.preventDefault();
      
      usr = document.getElementById('register-username').value;
      if (window.sessionStorage.getItem(usr) == null)
      {
         window.sessionStorage.setItem(usr, document.getElementById
            ('register-password').value);
            alert('account created!')
            usr.value = '';
            document.getElementById('register-password').value = '';
      }
      else{
         alert('username not available.');
      }
   });
 })
 
 



 
