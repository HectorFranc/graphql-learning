const CourseService = require('../../../services/CoursesService')
const { ObjectID } = require('mongodb')

let courseService = new CourseService()

module.exports = {
    people: async ({ people }) => {

        ids = people ? people.map(id => ObjectID(id)) : []

        return await courseService.getPeopleById(ids)
    }
}