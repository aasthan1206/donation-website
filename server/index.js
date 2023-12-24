const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES //

// add user
app.post("/registerDonation", async (req, res) => {
    try {
        const {first_name, last_name, email, phone, address, org, item1, quantity1, quality1, item2, quantity2, quality2, item3, quantity3, quality3, pick} = req.body;
        const newEntry = await pool.query("INSERT INTO registered_donations (first_name, last_name, email, phone, address, org, item1, quantity1, quality1, item2, quantity2, quality2, item3, quantity3, quality3, pick) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING * ", [first_name, last_name, email, phone, address, org, item1, quantity1, quality1, item2, quantity2, quality2, item3, quantity3, quality3, pick]);

        res.json(newEntry.rows[0]);
        console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
})

//  get all organizations
app.get("/organizations", async(req, res) => {
    try {
        const allOrganizations = await pool.query("SELECT * FROM organizations");
        res.json(allOrganizations.rows);
    } catch(err) {
        console.error(err.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
})