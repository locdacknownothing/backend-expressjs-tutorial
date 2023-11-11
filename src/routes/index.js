const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");

function route(app) {
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

  app.get("/kdb", (req, res) => {
    res.status(200).send({
      full_name: "Kevin de Bruyne",
      job: "Footballer",
      nation: "Belgium",
      age: 32,
      club: "Manchester City - England",
      position: "Attacking Midfielder",
    });
  });

  app.post("/kdb/:year", (req, res) => {
    const { year } = req.params;
    const { goals, assists } = req.body;

    if (!goals) {
      res.status(418).send({ message: "We need a goals stat" });
    }

    if (!assists) {
      res.status(418).send({ message: "We need an assists stat" });
    }

    let res_msg = `In the year ${year}, KDB has ${goals}-${assists} G-A`;

    res.send({
      message: res_msg,
    });
  });
}

module.exports = route;
