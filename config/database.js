module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf86ntpa6gdpabankrug-a.singapore-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'db_wh7n'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'u2gl0fQtrbLEj3Q0NKmlqTGnPryZVIIj'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
