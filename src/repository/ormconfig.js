module.exports = {
    type: 'postgres',
    synchronize: false,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: ['/migration/**/*.js'],
    entities: ['/models/**/*.model.js'],
    migrationsRun: true,
    logging: true,
};