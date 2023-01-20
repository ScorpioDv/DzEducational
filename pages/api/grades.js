import { grades } from "../../data/grades";

export default function handler(req, res) {
  res.status(200).json(grades)
};

