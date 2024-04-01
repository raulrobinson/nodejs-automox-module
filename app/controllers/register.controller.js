import db from "../models/index.js";

const Register = db.registers;

export const findLast = (req, res) => {
    Register.findOne({
        order: [['FECHA', 'DESC']]
    }).then(data => {
        if (data) {
            console.log(data.id)
            res.send({ total: 1, response: data });
        } else {
            res.status(404).send({
                message: `No se puede encontrar el ultimo registro`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error al recuperar el ultimo registro: ${err.message}`
        })
    })
}

export const findLastTen = (req, res) => {
    Register.findAll({
        order: [['FECHA', 'DESC']],
        limit: 10
    }).then(data => {
        if (data) {
            console.log('Retrieve registers: ' + data.length)
            res.send({ total: data.length, response: data });
        } else {
            res.status(404).send({
                message: `No se puede encontrar el ultimo registro`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error al recuperar el ultimo registro: ${err.message}`
        })
    })
}