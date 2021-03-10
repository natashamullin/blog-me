const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboard = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboard);
router.use('/api', apiRoutes);

module.exports = router;
