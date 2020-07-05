const MongoService = require('../lib/db')
const StudentsService = require('./StudentsService')
const { ObjectID } = require('mongodb')

let studentsService = new StudentsService()

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

    async addPersonToCourse(courseId, personId) {
        let course = await this.getCourseById(courseId)
        let student = await studentsService.getStudentById(personId)

        if ( !course || !student ) throw new Error('Person/course doesn\'t exist')

        let collection = await this.connect()

        collection.updateOne(
            { _id: ObjectID(courseId) },
            { $addToSet: { people: ObjectID(personId) } }
        )

        return course
    }

    async getPeopleById( ids ) {
        let studentsCollection = await studentsService.connect()

        
        let peopleData = (ids.length > 0)
            ? await studentsCollection.find({ _id:{ $in: ids } }).toArray()
            : []
        
        return peopleData
    }

    async search(keyword) {
        let collection = await this.connect()
        return await collection.find({
            $text: {
                $search: keyword
            }
        }).toArray()
    }
}

module.exports = CoursesService
