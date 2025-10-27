// middlewares/auth.js
function auth(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="NodeJS API Danny"');
    return res.status(401).send(' Acceso denegado: se requiere autenticación');
  }

  const base64Credentials = authHeader.split(' ')[1];
  const [username, password] = Buffer.from(base64Credentials, 'base64').toString('utf8').split(':');

  const USER = 'admin';
  const PASS = '1234';

  if (username === USER && password === PASS) {
    next(); //  usuario autenticado
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="NodeJS API Danny"');
    return res.status(401).send(' Credenciales inválidas');
  }
}

module.exports = auth;
