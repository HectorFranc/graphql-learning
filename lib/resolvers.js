const CoursesService = require('../services/CoursesService')

let coursesService = new CoursesService()

module.exports = {
    Query: {
        getCourses: async () => await coursesService.getAllCourses(),
        getCourse: async ( root, { id } ) => await coursesService.getCourseById(id)
    }
}