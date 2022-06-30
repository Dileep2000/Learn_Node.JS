const express = require("express");
const router = express.Router();
const {getPeople,postPeople,putPeople,deletePeople} = require('../contollers/people')

router.get('/',getPeople)

router.post('/',postPeople)

router.put('/:id',putPeople)
  
router.delete('S/:id',deletePeople)


module.exports = router