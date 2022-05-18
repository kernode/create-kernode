import Env from '@kernode/core/Env'

export default {
  database: {
    driver: Env.get('DB_CONNECTION'),

    /** Mysql */
    mysql: {
      host: Env.get('DB_HOST'),
      port: parseInt(Env.get('DB_PORT', '3306')),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', 'password'),
      database: Env.get('DB_NAME', 'sellfies'),
    },
  },
}
