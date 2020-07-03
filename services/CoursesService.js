const MongoService = require('../lib/db')
const { ObjectID } = require('mongodb')

class CoursesService {
    async connect() {
        if (!CoursesService.collection) {
            let connection = await MongoService.connect()
            CoursesService.collection = await connection.collection('courses')
        }
        return CoursesService.collection
    }

    async getAllCourses() {
        let collection = await this.connect()

        return collection.find().toArray()
    }

    async getCourseById(id) {
        let collection = await this.connect()

        return collection.findOne({ _id: ObjectID(id)})
    }
}

module.exports = CoursesService
