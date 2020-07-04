const MongoService = require('../lib/db')
const { ObjectID } = require('mongodb')
const CoursesService = require('./CoursesService')

class StudentsService {
    async connect() {
        if (!StudentsService.collection) {
            let connection = await MongoService.connect()
            StudentsService.collection = connection.collection('students')
        }
    
        return StudentsService.collection
    }

    async getAllStudents() {
        let collection = await this.connect()

        return collection.find().toArray()
    }

    async getStudentById(id) {
        let collection = await this.connect()

        return collection.findOne({ _id: ObjectID(id) })
    }

    async createStudent(data) {
        let collection = await this.connect()

        let createdStudent = await collection.insertOne(data)

        return this.getStudentById(createdStudent.insertedId)
    }
}

module.exports = StudentsService