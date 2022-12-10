
const handler = {};

handler.notFoundHandler = (requestProperties, callBack) => {
    callBack(404, {
        message: 'This is Not found url',
    })
};

module.exports = handler;