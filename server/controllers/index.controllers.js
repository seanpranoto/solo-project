const Professor =require("../model/index.model");

module.exports={
    findByUni:(req, res)=>{
        Professor.find({uni:req.params.uni})
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    },
    add:(req, res)=>{
        Professor.create(req.body)
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json(err));
    },
    rate:(req, res)=>{
        Professor.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true, context:"query"})
        .then(data=>res.json(data))
        .catch(err=>res.status(400).json(err));
    },
    findById:(req, res)=>{
        Professor.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(err=>res.json(err))
    }
}