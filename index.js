const express = require("express");
const mongoose = require("mongoose");

const config = require("./config");

const app = express();

const port = config.port;
const dbconn = config.databaseurl;

mongoose.connect(dbconn, {useNewUrlParser: true})
	.then(
		() => {
			console.log("JÁLESEEEEE PUTOOOO");
		},
		err => {
			console.log("NO VAAATO");
		}
	);
//mongoose.connect

app.all("/", (req,res) => {
	res.json({
		api: "Centraal",
		version: "0.0.1"
	});
});

app.listen(port, () => console.log("Corriendo en puerto: "+port+"!"));
