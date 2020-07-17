const express = require("express");
const Router = express.Router();
const sqlConnection = require("../db");

//fetch the capacity_demand transaction table details
Router.get("/fetchTransactionDetails", (req, res) => {
  sqlConnection.query(
    " select * from projects",
    (err, results) => {
      if (!err) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(results);
        //res.send(JSON.stringify({ status: 200, error: null, response: results }));
        console.log(" Fetching projects details Successfully");
      } else {
        console.log(err);
      }
    }
  );
});

Router.get("/fetchMonthYear", (req, res) => {
  sqlConnection.query(
    "select distinct week_ID,month,year,To_Date from week_details",
    (err, results) => {
      if (!err) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(results);
        //res.send(JSON.stringify({ status: 200, error: null, response: results }));
        console.log(" Fetching week_details Successfully");
      } else {
        console.log(err);
      }
    }
  );
});

// save the Resource time sheet details
Router.post("/resourceTimeSheet", (req, res) => {
  console.log("post Request",req.body);
  const requests = req.body.map((req, index) => (
    {
    project_id: req.projectId,
    project_name: req.projectName,
    resource_id: req.resourceId,
    resource_name: req.resourceName,
    skill_id: req.skillId,
    week_id: req.weekId,
    planned_effort: req.plannedEffort,
    actual_effort: req.actualEffort,
    user_id: req.userId,
    created_at: new Date(),
    }
  ));
 // console.log(requests);
  requests.map((data) => {
    query = "insert into capacity_demand SET ?";
    sqlConnection.query(query, data, (err, results) => {
      if (!err) {
        res.send(
          JSON.stringify({ status: 200, error: null, response: results })
        );
        console.log(
          "Time Sheet details inserted successfully" + results.affectedRows
        );
      } else {
        console.log(err);
      }
    });
  });
});

module.exports = Router;
