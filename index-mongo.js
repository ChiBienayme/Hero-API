// ---------------- MongoDB --------------------//

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Hero = require("./models/heroModel");

app.use(express.json());

// connect to db
mongoose
	.connect(	
        "mongodb+srv://chibienayme:ayUkqlOk180@cluster0.pg9q2.mongodb.net/heroes?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
    	}
	)
	.then(() => console.log("Connected to MongoDB"));

// routes
// homepage
app.get("/", (_req, res) => {
	res.send("Heroes");
});

// get all Heroes
app.get("/heroes", async (_req, res) => {
	const heroes = await Hero.find().select("-__v");

	res.json(heroes);
});

// find heroes by ID
app.get("/heroes/:id", async (req, res) => {
	const hero = await Hero.findById(req.params.id);

	res.json(hero);
});

// find heroes by power
app.get("/heroes/:power", async (req, res) => {
	const hero = await hero.findOne({ power: req.params.power });

	res.json(hero);
});

// update power of hero by id
app.patch("/heroes/:id", async (req, res) => {
	await Hero.findByIdAndUpdate(req.params.id, {
		power: req.body.power,
	});

	res.json({
		message: "Power updated",
	});
});

// Add more an hero
app.post("/heroes", async (req, res) => {
	await Hero.create(req.body);

	res.status(201).json({
		message: "Hero created",
	});
});


// Start server
app.listen(8001, () => console.log("Listening"));