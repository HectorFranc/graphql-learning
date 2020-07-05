const CoursesService = require('../../services/CoursesService')
const StudentsService = require('../../services/StudentsService')

let coursesService = new CoursesService()
let studentsService = new StudentsService()

module.exports = {
    getCourses: async () => await coursesService.getAllCourses(),
    getCourse: async ( root, { id } ) => await coursesService.getCourseById(id),

    getPeople: async() => await studentsService.getAllStudents(),
    getPerson: async ( root, { id } ) => await studentsService.getStudentById(id),

    searchItems: async ( root, { keyword } ) => {
        let courses = await coursesService.search(keyword)
        let students = await studentsService.search(keyword)

        return [...courses, ...students]
    },
}