const express = require("express");
const app = express();

app.use(require("cors")());
app.use(express.json());

app.set("secret","iaslkf123132");

require("./routes/admin")(app);
require("./plugins/db")(app);


app.use('/uploads',express.static(__dirname+"/uploads"))


app.listen("3000",()=>{
    console.log("listen port 3000");
});

