import * as Listr from 'listr';
import { cpuUsage } from 'process';


const compodoc = () => {
  console.log(__dirname)
  console.log(cpuUsage());
  
}
compodoc();

// const tasks = new Listr({ collapse: false } as any);

// tasks.add({
//   title: 'Acessibiliadde',
//   task: async () => {
//     return new Promise((resolve, reject) => {
//       compodoc();

//       resolve()
//     })
//   }
// });

// tasks.run().catch(err => {
//   console.error(err.message);
  
// })
