const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const jwt = require('jsonwebtoken');
const SECRET = 'hortencia';

server.use(middlewares);
server.use(jsonServer.bodyParser);

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if(err) return res.status(401).end();
    req.userId = decoded.userId;
    next();
  })
}

server.use((req, res, next) => {
  
  if (req.path === '/login') {
    console.log(req.body);
    if (req.body.user === 'admin@email.com' && req.body.password === 'admin') { // add your authorization logic here
      const token = jwt.sign({userId: 1}, SECRET, {expiresIn: 300});
      return res.json({auth: true, token});
    } else {
      res.sendStatus(401);
    }
  } else {
    verifyJWT(req, res, next);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
})