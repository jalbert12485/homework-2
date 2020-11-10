const path = require("path");


// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'../public/html/index.html'));
    });


    app.get("/:file", (req, res) => {
        let file=req.params.file;
        res.sendFile(path.join(__dirname,`../public/html/${file}.html`));
    });

 


};
