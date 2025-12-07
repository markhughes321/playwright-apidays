module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['tests/step-definitions/**/*.ts', 'tests/support/**/*.ts'],
    paths: ['tests/features/**/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
  },
};
