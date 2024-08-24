const { argv } = require('yargs');
let bumpFiles = [
  {
    filename: 'package.json',
  },
  {
    filename: 'package-lock.json',
  },
  {
    filename: './app.json',
    updater: require.resolve('./scripts/standard-version/manifest-version'),
  },
];

if (
  argv &&
  argv['skip'] &&
  argv['skip']['appVersion']
) {
  bumpFiles = bumpFiles.filter(function (file) {
    return file.updater && !file.updater.includes('manifest');
  });
}

module.exports = {
  bumpFiles,
  types: [
    {
      hidden: true,
      type: 'chore',
    },
    {
      section: 'Features',
      type: 'feature',
    },
    {
      section: 'Bug Fixes',
      type: 'fix',
    },
    {
      section: 'Enhancements',
      type: 'enhancement',
    },
    {
      hidden: true,
      type: 'refactor',
    },
    {
      hidden: true,
      type: 'revert',
    },
    {
      hidden: true,
      type: 'test',
    },
    {
      section: 'UI',
      type: 'ui',
    },
  ],
};
