const express = require('express'),
OngController = require('./controller/OngController'),
IncidentController = require('./controller/IncidentController'),
ProfileController = require('./controller/ProfileController'),
SessionController = require('./controller/SessionController'),
routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;