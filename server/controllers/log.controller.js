import HttpStatus from "http-status-codes";
import Threats from "../models/threat.model";
import User from "../models/user.model";

let weapon, img, percentage;

export function save(req, res) {
  const {userId} = req.params;
  for (var i = 0; i < req.body.length; i++) {
    weapon = req.body[i].weapon;
    img = req.body[i].img;
    percentage = req.body[i].percentage;
    Threats.forge({ weapon, img, percentage, userid: userId }, { hasTimestamp: true })
      .save()
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          error: err
        })
      );
  }
  res.json({
    save: true
  });
  console.log(res);
}

export function getAll(req, res) {
  const {userId} = req.params;
  Threats.query({
    where: {userid: userId},
  }).fetchAll().then(threats => {
    res.json(threats);
  });
}
