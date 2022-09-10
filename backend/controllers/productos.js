exports.GetProduct = (req, res) =>{
    const {product} = database
    res.status(200).json(product);
}

exports.NewProduct = (req, res) =>{
    console.log(req.body);
}

exports.DeleteProduct = (req, res) =>{
    res.send('delete')
}