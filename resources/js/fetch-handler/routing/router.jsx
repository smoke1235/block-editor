

class Router {

    constructor(routes) {
        this.routes = routes
    }

    match(options) {
        return this.routes.find((route) => {
            if (options.path === undefined) {
                return false
            }

            const method = options.headers && options.headers['X-HTTP-Method-Override']
                ? options.headers['X-HTTP-Method-Override']
                : options.method || 'GET'

            if (route.method !== method) {
                return false
            }

            route.regex.lastIndex = 0
            const matches = route.regex.exec(options.path)
            
            return matches && matches.length > 0
        })
    }
}

export default Router