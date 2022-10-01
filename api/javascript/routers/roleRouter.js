const express = require('express');
const { routes } = require('../routes');
const Controller = require('../controllers/roleController');

const roleRouter = express.Router();

roleRouter.get('/getAllRoles', Controller.getAllRoles);
roleRouter.post('/createRole', Controller.createRole);
roleRouter.put('/updateRole/:id', Controller.updateRole);
roleRouter.delete('/deletemanyRoles',Controller.deletemanyRoles);

module.exports = { roleRouter };
