import Listr from 'listr';
// import agnular from './angular';


import custom from './custom';
const tasks = new Listr([
  custom
]);

export default tasks;
