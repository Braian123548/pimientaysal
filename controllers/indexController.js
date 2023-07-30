const menu = require("../data/menu.json");

const index = {
    get:(req,res)=>{
        res.render('index', {menu:menu})
    }
}

const detalle = {
    get: (req, res) => {
        const platoId = req.params.id;
        const plato = menu.find(plato => plato.id == platoId);

        if (!plato) {
            return res.status(404).json({ mensaje: 'Plato no encontrado' });
        }
        res.render("detalleMenu", { plato: plato });
    }
}

module.exports={
    index,
    detalle
}