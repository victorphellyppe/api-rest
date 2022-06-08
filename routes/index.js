// Agora toda vez que criarmos um arquivo de rota,
// basta importar ele no arquivo index de Routes, 
// como fizemos com o de usuário.

const UsuarioRoute = require('./UsuariRoute');

module.exports = (app) => { 
    UsuarioRoute(app);
}