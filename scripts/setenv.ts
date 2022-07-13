const { writeFile } = require('fs');
const { config } = require('dotenv');
const yargs = require('yargs');

config();

let argv = yargs
  .option('environment', {
    alias: 'env',
    choices: ['prod', 'dev'],
    demandOption: true,
  }).parseSync();


const isProduction = argv.environment === 'prod';

const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;


const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   NG_APP_ANGULAR_BUTTER_CMS_API_KEY: "${process.env.NG_APP_ANGULAR_BUTTER_CMS_API_KEY}",
   NG_APP_ANGULAR_BUTTER_CMS_PREVIEW: "${process.env.NG_APP_ANGULAR_BUTTER_CMS_PREVIEW}"
};
`;

writeFile(targetPath, environmentFileContent, function (err) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
});
