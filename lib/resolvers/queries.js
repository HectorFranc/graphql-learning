const CoursesService = require('../../services/CoursesService')
const StudentsService = require('../../services/StudentsService')

let coursesService = new CoursesService()
let studentsService = new StudentsService()

module.exports = {
    getCourses: async () => await coursesService.getAllCourses(),
    getCourse: async ( root, { id } ) => await coursesService.getCourseById(id),

    getStudents: async() => await studentsService.getAllStudents(),
    getStudent: async ( root, { id } ) => await studentsService.getStudentById(id) 
}