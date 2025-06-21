import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const base_url = "https://leetcode-stats-api.herokuapp.com";

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/submit",async(req,res)=>{
    const username = req.body.name;

    try{
        console.log(base_url+"/"+username);
        const response = await axios.get(base_url+"/"+username);
    const result = response.data;
    console.log(result.mediumSolved);
    const stats = JSON.stringify({
         easyDone:result.easySolved,easyTotal:result.totalEasy,
         mediumDone:result.mediumSolved,mediumTotal:result.totalMedium,
         hardDone:result.hardSolved,hardTotal:result.totalHard   
        })
    res.render("metric",{data:result,user:username,stats:stats});
    }catch(error){
        console.error("Failed to make request:", error.message);
        res.render("metric", {
          error: error.message,
        });
    }
})


app.listen(port,(req,res)=>{
    console.log("server is live.");
});

