const Professor =require("../controllers/index.controllers");

module.exports=app=>{
    app.get("/api/professor/:uni", Professor.findByUni);
    app.post("/api/professor", Professor.add);
    app.put("/api/professor/:id", Professor.rate);
    app.get("/api/id/:id", Professor.findById);
}