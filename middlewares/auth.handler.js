const  boom  = require("@hapi/boom");

const {config} = require('../config/config')

function checkApiKey(req, res, next) {
  const apikey = req.headers['api'];
  if (apikey === config.apikey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...role) {
  return (req, res, next) =>{
    const user = req.user;
    if (role.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  }}

module.exports = { checkApiKey, checkAdminRole, checkRoles }
