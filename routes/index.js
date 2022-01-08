export default function (app) {
  require('./User').default(app);
  require('./Company').default(app);
};
  