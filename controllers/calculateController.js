function luasPersegi(res, req) {
    let result = (req.body.panjang*req.body.lebar)

    res.json({
        panjang: req.body.panjang,
        lebar: req.body.lebar,
        result: result
    })
}

module.exports = {
    luasPersegi: luasPersegi,
    luasPersegi: function(req, res) {
        
        let result = req.body.panjang*req.body.lebar;
        res.status(201).json({
            panjang: req.body.panjang,
            lebar: req.body.lebar,
            result: result
        })
    }
}