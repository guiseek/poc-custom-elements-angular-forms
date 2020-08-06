import axe from 'axe-core';
import { outputJson } from 'fs-extra';
import { cyan } from 'chalk';
import { resolve } from 'path';
import jsdom from 'jsdom';

const OUTPUT_PATH = resolve(__dirname, '../data/axe-tests.json');

export default {
  title: 'Getting a list of past commits',
  task: async (_: any, task: any) => {
    const Results = await findViolations();
    console.log('Results: ', Results);

    // if (Object.keys(Results && Results.passes).length > 0) {
    //   outputJson(OUTPUT_PATH, Results, { spaces: 2 });
    // }
  },
};

const findViolations = async () => {
  const one = new jsdom.JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        Hello
      </body>
    </html>
  `);
  try {
    const { url, violations, passes, toolOptions } = await axe.run(
      one.window.document.documentElement,
      {
        rules: {
          'color-contrast': { enabled: true },
        },
      }
    );
    console.log('URL: ', cyan(url));
    // console.log(testEnvironment);
    console.log('violations: ', violations);
    console.log('passes: ', passes);
    console.log('toolOptions: ', toolOptions);

    if (violations.length) {
      throw new Error('Problemas de acessibilidade encontrados');
    }
    console.log('one: %d violations', violations.length);

    return passes;
  } catch (err) {
    console.error('Algo de errado: ', err.message);
    // throw new Error(err);
  }
};
