const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin  123 .202';
  const hash = '$2b$10$xJrih5NHs47AC.H7HApAK.Mw677JuYZmgsgZBABdXecDDI9u0aLgq'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

hashPassword();




