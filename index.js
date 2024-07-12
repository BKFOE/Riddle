//Import express and axios
import express from "express";
import axios from "axios";

//Create express app and set port number
const app = express();
const port = 3000;
const API_URL = "https://riddles-api.vercel.app/random";

//Use the public folder for the static files
app.use(express.static("public"));


//Get random riddle and display answer
app.get("/", async (req, res) => {
    try {
    const result = await axios.get(API_URL);
    const riddle = result.data.riddle;
    const answer = result.data.answer;
    res.render("index.ejs", {riddle, answer});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    };
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});