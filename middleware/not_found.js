const notFound = (req,res)=>res.status(404).send({msg:'Oops!!! page not found'});

module.exports = notFound;