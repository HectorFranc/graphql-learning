require('dotenv').config()

module.exports = {
    debug: process.env.DEBUG,
    db_user: process.env.DB_USER,
    db_passwd: process.env.DB_PASSWD,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
}