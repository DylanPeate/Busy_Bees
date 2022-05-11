const {
  db: { username, password, database, host },
} = require('./index');



module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://xbixcixwaiodbn:2ba90686caf1ac6915f07d702225f6b542c2376d8e19448453dc8c0e87964a99@ec2-52-200-215-149.compute-1.amazonaws.com:5432/d516hben8nf6ck',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  }
};
