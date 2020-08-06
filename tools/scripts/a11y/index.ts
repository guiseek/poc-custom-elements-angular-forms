import Listr from 'listr';
import axe from './axe';

const tasks = new Listr([
  axe
]);

export default tasks;
