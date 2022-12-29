import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import pkg from '../package.json';

// Bootstrap
(async () => {
  // Setup yargs
  const parser = yargs(hideBin(process.argv))
    .scriptName('boobrie')
    .completion('completion', 'Generate bash completion script')
    .help('help', 'Show help for a command')
    .version('version', 'Show version', pkg.version)
    .wrap(process.stdout.columns);

  // Parse !
  await parser
    .demandCommand()
    .recommendCommands()
    .strict()
    .parse();
})();
