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

    async createCourse(data) {
        let defaults = {
            teacher: '',
            topic: '',
        }

        data = {
            ...defaults,
            ...data
        }

        let collection = await this.connect()

        let createdCourse = await collection.insertOne(data)

        data._id = createdCourse.insertedId

        return data
    }
}

module.exports = CoursesService
