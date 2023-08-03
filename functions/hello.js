// domain/.netlify/functions/hello
const items = [
    { id: 1, name: 'sam' },
    { id: 2, name: 'ngan' },
]

exports.handler = async function (even, context) {
    return {
        statusCode: 200,
        body: 'Hello World'
    }
}