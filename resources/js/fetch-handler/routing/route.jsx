
class Route {
   
    

    constructor (method, regex, handler) {
        this.method = method
        this.regex = regex
        this.handler = handler
    }

    static get(regex, handler) {
        return new Route('GET', regex, handler)
    }

    static put(regex, handler) {
        return new Route('PUT', regex, handler)
    }

    static post(regex, handler) {
        return new Route('POST', regex, handler)
    }

    static delete(regex, handler) {
        return new Route('DELETE', regex, handler)
    }

    handle (options) {
        return Promise.resolve(
            this.handler(options)
        )
    }
}

export default Route