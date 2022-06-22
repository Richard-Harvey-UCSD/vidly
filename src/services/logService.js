import Raven from 'raven-js';

function init() {
  // Raven.config('https://f88aeb47ecd7432b8dcbf32e3b90c461@o1295841.ingest.sentry.io/6521921', {
  //   release: '1-0-0',
  //   environment: 'development-test',
  // }).install();
}

function log(error) {
  // Raven.captureException(error);
  console.log(error);
}

export default {
  init,
  log
};