const jwt = require("jsonwebtoken");

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwNDQ4MDEwNX0.NJYeUxkuebnvh9tVqp47RcNB-x-xTYcqd_dDWlxl_aM'


function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);


