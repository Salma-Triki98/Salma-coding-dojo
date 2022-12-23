const Projectcontrolle = require("../controllers/projects.controller")
module.exports = app => {
    app.get('/api/project', Projectcontrolle.findAll);
    app.post('/api/project', Projectcontrolle.createone);
    app.get('/api/project/:id', Projectcontrolle.findOne);
    app.put('/api/project/:id', Projectcontrolle.updateone);
    app.delete('/api/project/:id', Projectcontrolle.deleteone);

}