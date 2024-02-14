export const badRequest = (errorMessage) => {
    return {
        statusCode: 400,
        body: {
            errorMessage,
        },
    }
}
