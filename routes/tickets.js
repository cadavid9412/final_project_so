const {Router} = require('express');

const { 
    ticketGet,
    ticketPut,
    ticketPost,
    ticketDelete } = require('../controllers/tickets');

const router = Router();

router.get('/', ticketGet );

router.put('/:id', ticketPut );

router.post('/', ticketPost );

router.delete('/', ticketDelete );

module.exports = router;