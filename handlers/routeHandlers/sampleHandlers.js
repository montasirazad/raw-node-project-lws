
const handler = {};

handler.sampleHandle = (requestProperties, callBack) => {
    callBack(200, {
        message: 'This is sample url',
    })
}

module.exports = handler;