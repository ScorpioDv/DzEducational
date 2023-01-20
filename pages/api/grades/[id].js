import { grades } from '../../../data/grades';

export default (req, res) => {
  const { id } = req.query;

  const grade = grades.find(grade => grade.name == id);
  res.status(200).json(grade);
};