module.exports = {
    __resolveType: ( item, context, info ) => {
        if (item.title) {
            return 'Course'
        }

        if (item.phone) {
            return 'Monitor'
        }

        return 'Student'
    }
}