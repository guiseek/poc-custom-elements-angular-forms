import Listr from 'listr';
import a11y from '../a11y';
import docs from '../docs';
import commits from '../git';

const tasks = new Listr();

// tasks.add({
//   title: 'Acessibiliadde',
//   task: () => a11y,
// });

// tasks.add({
//   title: 'Commits',
//   task: () => commits,
// });

tasks.add({
  title: 'Docs',
  task: () => docs,
});

tasks.run().catch((err) => {
  console.error('err: ', err.message);
  process.exit(1);
});
