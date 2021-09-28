const {Router} = require('express');

const{
    ticketsGet
} = require('../controllers/tickets')

const router = Router();

router.get('/', ticketsGet);

modules.exports = router;