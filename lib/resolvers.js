const courses = [
    {
        _id: '1',
        title: 'My title 1',
        teacher: 'The teacher',
        description: 'Course description',
        topic: 'Math',
    },
    {
        _id: '2',
        title: 'My title 2',
        teacher: 'The teacher',
        description: 'Course description',
        topic: 'Math',
    },
    {
        _id: '3',
        title: 'My title 3',
        teacher: 'The teacher',
        description: 'Course description',
        topic: 'Math',
    },
]

module.exports = {
    Query: {
        getCourses: () => courses,
        getCourse: ( root, args ) => {
            const courseId = args.id

            const course = courses.find(course => course._id === courseId)

            return course
        }
    }
}