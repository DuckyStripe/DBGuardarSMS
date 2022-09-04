const { Router } = require('express');
const { check } = require('express-validator');
const { consumirApi } = require('../controllers/index');
const { validateCamps } = require('../middlewares');

const router = Router();


router.get('/',
    [
        check('token', 'El token es obligatorio').trim().not().isEmpty(),
        check('tel', 'Tiene que ser un numero valido no mayor a 10 digitos').isNumeric().isLength({ max: 10 }),
        check('msg', 'El campo msg es obligatorio').trim().not().isEmpty(),
        validateCamps
    ],
    consumirApi
);

module.exports = router;

