const CoursesService = require('../../services/CoursesService')
const StudentsService = require('../../services/StudentsService')

let coursesService = new CoursesService()
let studentsService = new StudentsService()

module.exports = {
    createCourse: async ( root, { input } ) => await coursesService.createCourse(input),

    createStudent: async ( root, { input }) => await studentsService.createStudent(input),

    addPeople: async( root, { courseID, personID }) => await coursesService.addPersonToCourse(courseID, personID)
}