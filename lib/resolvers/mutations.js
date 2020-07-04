const CoursesService = require('../../services/CoursesService')

let coursesService = new CoursesService()

module.exports = {
    createCourse: async ( root, { input } ) => await coursesService.createCourse(input)
}