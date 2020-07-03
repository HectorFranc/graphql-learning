const courses = [
    {
        _id: 'SomeId',
        title: 'My title 1',
        teacher: 'The teacher',
        description: 'Course description',
        topic: 'Math',
    },
    {
        _id: 'SomeId',
        title: 'My title 2',
        teacher: 'The teacher',
        description: 'Course description',
        topic: 'Math',
    },
    {
        _id: 'SomeId',
        title: 'My title 3',
        teacher: 'The teacher',
        description: 'Course description',
        topic: 'Math',
    },
]

module.exports = {
    getCourses: () => courses
}