// routes/api/Partss.js

const express = require('express');
const router = express.Router();

// Load Parts model
const Parts = require('../../models/Parts.js');

// @route GET api/Partss/test
// @description tests Partss route
// @access Public
router.get('/test', (req, res) => res.send('Parts route testing!'));

// @route GET api/Partss
// @description Get all Partss
// @access Public
router.get('/', (req, res) => {
  Parts.find()
    .then(Parts => res.json(Parts))
    .catch(err => res.status(404).json({ noPartsfound: 'No Parts found' }));
});

// @route GET api/Partss/:id
// @description Get single Parts by id
// @access Public
router.get('/:id', (req, res) => {
  Parts.findById(req.params.id)
    .then(Parts => res.json(Parts))
    .catch(err => res.status(404).json({ noPartsfound: 'No Parts found' }));
});

// @route GET api/Partss
// @description add/save Parts
// @access Public
router.post('/', (req, res) => {
  Parts.create(req.body)
    .then(Parts => res.json({ msg: 'parts added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this part' }));
});

// @route GET api/Partss/:id
// @description Update Parts
// @access Public
router.put('/:id', (req, res) => {
  Parts.findByIdAndUpdate(req.params.id, req.body)
    .then(Parts => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/Partss/:id
// @description Delete Parts by id
// @access Public
router.delete('/:id', (req, res) => {
  Parts.findByIdAndRemove(req.params.id, req.body)
    .then(Parts => res.json({ mgs: 'Parts entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Parts' }));
});

module.exports = router;
