const { MongoClient } = require('mongodb')
const {
    db_user,
    db_passwd,
    db_host,
    db_name

} = require('../config')



class MongoService {
    
    static async connect() {
        if (!MongoService.connection) {
            const mongoUrl = `mongodb+srv://${db_user}:${db_passwd}@${db_host}/?retryWrites=true&w=majority`
            try {
                let client = new MongoClient(mongoUrl, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })

                let connection = await client.connect()

                MongoService.connection = await connection.db(db_name)

                console.info('Connected to mongo db')
            } catch (error) {
                console.error('Could not connect to mongo db', error)
                process.exit(1)
            }
        }

        return MongoService.connection
    }
}

module.exports = MongoService