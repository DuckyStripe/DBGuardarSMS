const { validationResult } = require('express-validator');

const validateCamps = (req, res, next) => {

    // Obtener arrays de errores
    const errors = validationResult(req);

    // Validar si el array tiene algo.
    if (!errors.isEmpty()) return res.status(400).json({
        code: 400,
        resultado: "Hubo un error con los parametros",
        errors: errors.mapped()
    });
    
    // Si no hay errores llama al controller. 
    next();
}


//**...  EXPORTACION DE MIDDLEWARES   ....**//
module.exports = {
    validateCamps,
}




