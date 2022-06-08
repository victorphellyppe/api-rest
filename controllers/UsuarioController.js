// CRUD

// C

exports.post = (req, res, next) => {
    res.status(201).send('Rota post!');
};

// U
exports.put = (req, res,next) => {
    let id = req.params.id;
    res.status(201).send('Rota put!');
};

// D
exports.delete = (req, res, next) => {
    let id = req.params.id;
}

// R
exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
 };