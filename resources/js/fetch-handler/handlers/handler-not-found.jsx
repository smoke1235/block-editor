


class FetchError extends Error {

    constructor() {
        super(object.message);
        this.data = object
    }
}




const handlerNotFound = (options) => {
    return new Promise((resolve, reject) => {
        return reject(
            new FetchError(
                {
                    code: 'api_handler_not_found',
                    message: 'API handler not found.',
                    data: {
                        path: options.path,
                        options: options,
                        status: 404
                    }
                }
            )
        )
    })
}

export default handlerNotFound