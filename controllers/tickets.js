const { response, request } = require('express');


const ticketGet = (req = request, res = response) => {

    const {id,filmName,roomNumber,location,position,date,value } = req.query;

    res.json({
        msg: 'get API - ticket get',
        id,
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
    });
}

const ticketPost = (req, res = response) => {

    const {id, filmName,roomNumber,location,position,date,value } = req.body;

    res.json({
        msg: 'post API - ticketPost',
        id,
        filmName,
        roomNumber,
        location,
        position,
        date,
        value
    });
}

const ticketPut = (req, res = response) => {

    const { filmName,roomNumber,location,position,date,value } = req.params;

    res.json({
        msg: 'put API - ticketPut',
        id,
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