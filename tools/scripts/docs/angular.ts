import { cyan } from 'chalk';
import { resolve } from 'path';
import { exec, execSync } from 'child_process';

export default {
  title: 'Docs ui-angular',
  task: async (_: any, task: any) => {
    const Results = execCompodoc();
    console.log('Results: ', Results);

    // if (Object.keys(Results && Results.passes).length > 0) {
    //   outputJson(OUTPUT_PATH, Results, { spaces: 2 });
    // }
  },
};

const execCompodoc = async () => {
  try {
    return await new Promise((resolve, reject) => {
      exec('npx compodoc -p libs/ui/angular/tsconfig.lib.json -s -e json', (error, stdout) => {
        if (error) {
          reject(error)
        }
        resolve(stdout);
      });
    });
  } catch (error) {
    console.log('ERROR: ', error.message);
    
  }
};
