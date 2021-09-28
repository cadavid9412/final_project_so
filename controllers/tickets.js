const { response, request } = require('express');


const ticketsGet = (req = request, res = response) => {

    const { id,filmName,roomNumber,location,position,date,value} = req.query;

    res.json({
        msg: 'get API - controlador',
        id,
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
    });
}

const ticketsPost = (req = request, res = response) => {

    const { id,filmName,roomNumber,location,position,date,value} = req.query;

    res.json({
        msg: 'post API - controlador',
        id,
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
        
    });
}

const ticketsPut = (req = request, res = response) => {

    const { id,filmName,roomNumber,location,position,date,value } = req.query;

    res.json({
        msg: 'put API - controlador',
        id,
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
        
    });
}

const ticketsDelete = (req = request, res = response) => {

    const { id } = req.query;

    res.json({
        msg: 'delete API - controlador',
        
    });
}

module.exports = {
    ticketsGet,
    ticketsPost,
    ticketsPut,
    ticketsDelete
}