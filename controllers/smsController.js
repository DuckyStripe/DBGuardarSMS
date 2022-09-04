const { response, request } = require('express');
const db = require('../config/db');

const consumirApi = async (req = request, res = response) => {


    const { token, tel, msg, statusw,stats } = req.query;

    let code;
    let resultado = '';

    try {
        console.log("Entro:", token, tel, msg, statusw);
        if (statusw == 1) {
            code = 200;
            const datos = await db.query('EXEC SP_GUARDARRESPUESTAS :token, :tel, :mensaje, :status', {
                replacements: { token, tel, mensaje:msg,status:"Enviado" },
                raw: true
            });
            
            resultado = 'Exito';
            if (datos.length > 0) {
            return res.status(code).json({
                code,
                resultado
            })};

        } if (statusw == 2) {
            code = 400;
            resultado = stats;
            const datos = await db.query('EXEC SP_GUARDARRESPUESTAS :token, :tel, :mensaje, :status', {
                replacements: { token, tel, mensaje:msg,status:stats},
                raw: true
            });
            if (datos.length > 0) {
            return res.status(code).json({
                code,
                resultado
            })};
        }
        console.log(error);

    } catch (error) {
        const datos = await db.query('EXEC SP_GUARDARRESPUESTAS :token, :tel, :mensaje, :status', {
            replacements: { token, tel, mensaje:msg,status:stats},
            raw: true
        });
        if (datos.length > 0) {
        res.status(500).json({
            code: 500,
            resultado: "Error! Hubo un error al momento de mandar el sms"
        })};

    }
}


module.exports = {
    consumirApi
}





