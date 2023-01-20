import { highschoolgrades } from "../../data/highschoolgrades";

export default function handler(req, res) {
  console.log(highschoolgrades)
  res.status(200).json(highschoolgrades)
};

