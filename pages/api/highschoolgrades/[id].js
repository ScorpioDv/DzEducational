import { highschoolgrades } from '../../../data/highschoolgrades';

export default (req, res) => {
  const { id } = req.query;
  console.log(id)
  const grade = highschoolgrades.find(grade => grade.name == id);
  res.status(200).json(grade);
};