const Project = require ('../models/projects.model')

module.exports ={
    findAll: (req, res)=>{
        Project.find()
        .then(AllTheProject => {res.json(AllTheProject)})
        .catch(err => {res.json(err)})
    },
    findOne: (req, res)=>{
        Project.findById(req.params.id)
        .then(OneSingle => {res.json(OneSingle)})
        .catch(err => {res.json(err)})
},
    createone: (req, res)=>{
        Project.create(req.body)
        .then(createpro => {res.json(createpro)})
        .catch(err => {res.json(err)})
},
    updateone:(req, res)=>{
        Project.findByIdAndUpdate(req.params.id, req.body,{new:true})
        .then(updatepro=>{res.json(updatepro)})
        .catch(err=>{res.json(err)})
},
    deleteone: (req, res)=>{
        Project.findByIdAndDelete(req.params.id)
        .then(deletepro=>{res.json(deletepro)})
        .catch(err=>{res.json(err.errors)})
    },
}