const { response, request } = require('express');


const ticketGet = (req = request, res = response) => {

    const { filmName,roomNumber,location,position,date,value } = req.query;

    res.json({
        msg: 'get API - ticket get',
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
    });
}

const ticketPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - ticketPost',
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
    });
}

const ticketPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - ticketPut',
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
    });
}


const ticketDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - ticketDelete'
    });
}




module.exports = {
    ticketGet,
    ticketPost,
    ticketPut,
    ticketDelete
}