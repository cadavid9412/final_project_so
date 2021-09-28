const {Router} = require('express');

const{
    ticketsGet,
    ticketsPut,
    ticketsPost,
    ticketsDelete
} = require('../controllers/tickets')

const router = Router();


router.get('/', tickectsGet );

router.put('/:id', tickectsPut );

router.post('/', tickectsPost );

router.delete('/', tickectsDelete );

modules.exports = router;