import Listr from 'listr';
import commits from './commits';

const tasks = new Listr([
  commits
]);

export default tasks;