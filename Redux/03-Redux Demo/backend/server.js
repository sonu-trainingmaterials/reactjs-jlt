
import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
const dbUrl = 'mongodb://localhost:27017';

app.use(bodyParser.json());

mongodb.MongoClient.connect(dbUrl, function (err, client) {
    const db = client.db("GamesDb");
    //apis
    app.get("/api/games", (req, resp) => {
        db.collection('games')
            .find({})
            .toArray((err, games) => {
                resp.json({ games });
            });
    });

    app.post("/api/games", (req, resp) => {
        const { errors, isValid } = validate(req.body);
        if (isValid){
            db.collection("games").insert(req.body, (err,result)=>{
                if(err){
                    resp.status(500).json({errors:{
                        global:"Failed to insert to database"
                    }});
                }else{
                    resp.status(201).json({
                        game:result.ops[0]
                    })
                }
            });
        }else {
            return resp.status(400).json({ errors });
        }
    })

    app.use((req, res) => {
        res.status(404)
            .json({
                errors: {
                    global: "Something went wrong, try after some time"
                }
            })
    })

    if (!err) {
        app.listen(8080, () => console.log('Server is running on localhost:8080'));

    } else {
        console.log("Could not start server, error in connecting MongoDB")
    }
})

function validate(data) {
    let errors = {};
    if (data.title === '') {
        errors.title = "Cannot be empty";
    }
    if (data.cover === '') {
        errors.cover = "Cannt be empty";
    }
    //check form is valid
    const isValid = Object.keys(errors).length === 0;
    return { errors, isValid };
}