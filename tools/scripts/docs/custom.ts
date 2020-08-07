import glob from 'fast-glob';
import { outputJson, readJson } from 'fs-extra';
import { resolve } from 'path';

console.log(__dirname, '../../src/pages');

const PAGES_PATH = resolve(__dirname, '../../../libs/ui/custom/src/components');
const INDEX_PATH = resolve(__dirname, 'libs');

console.log(PAGES_PATH);


export default {
  title: 'Generate docs',
  task: () => buildIndex(PAGES_PATH),
  skip: () => true
};

const buildIndex = async (dir: any) => {
  const paths = await getPaths(dir);
  const records = await Promise.all(paths.map(toRecord));
  return outputJson(
    INDEX_PATH,
    records,
    { spaces: 2 }
  );
};

const toRecord = async (path: any) => {
  const { title } = await readJson(path);
  const href = toHref(path);
  return {
    title,
    href,
    type: 'page'
  };
};

const getPaths = (cwd: any) => {
  return glob('**/*.json', {
    absolute: true,
    cwd
  });
};

const toHref = (path: string) => {
  const [, page] = /\/pages\/(.+)\.json$/.exec(path) ?? [];
  return `/docs/${page}`;
};

// import { cyan } from 'chalk';
// import { resolve } from 'path';
// import { exec, execSync } from 'child_process';

// export default {
//   title: 'Docs ui-angular',
//   task: async (_: any, task: any) => {
//     const Results = execCompodoc();
//     console.log('Results: ', Results);

//     // if (Object.keys(Results && Results.passes).length > 0) {
//     //   outputJson(OUTPUT_PATH, Results, { spaces: 2 });
//     // }
//   },
// };

// const execCompodoc = async () => {
//   try {
//     return await new Promise((resolve, reject) => {
//       exec('npx compodoc -p libs/ui/angular/tsconfig.lib.json -s -e json', (error, stdout) => {
//         if (error) {
//           reject(error)
//         }
//         resolve(stdout);
//       });
//     });
//   } catch (error) {
//     console.log('ERROR: ', error.message);
    
//   }
// };
