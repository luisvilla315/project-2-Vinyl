const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// Define the path for the server for the API routes //
router.use('/api', apiRoutes);

// Define the path for the home page //
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;