require('dotenv').config()
module.exports = {
  development: {
    database: 'xibalba_development',
    dialect: 'postgres'
  },
  test: {
    database: 'xibalba_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
