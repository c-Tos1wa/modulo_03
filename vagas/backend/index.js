const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const jobs = [
  {
      id: 1,
      local: "Blue",
      salary: 3000,
      classification: "Front-End Jr",
      type: "estágio"
  },
  {
      id: 2,
      local: "Google",
      salary: 10000,
      classification: "Front-End Jr",
      type: "CLT"
  },
  {
      id: 3,
      local: "Facebook",
      salary: 20000,
      classification: "Full Stack Sr",
      type: "PJ"
  },
  {
      id: 4,
      local: "Amazon",
      salary: 15000,
      classification: "Full Stack Pl",
      type: "CLT"
  }]

  app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  })

app.get("/vagas", (req, res) => {
  res.send(jobs);
})

app.get("/vagas/:id", (req, res) => {
  const id = req.params.id;
  const jobById = jobs.find(vacancy => vacancy.id == id);
  res.send(jobById);
})


app.listen(port, () => {
  console.log(`App rodando em ${port}`);
})