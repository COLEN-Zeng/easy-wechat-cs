module.exports = async ({request: {request, index}}) => {
    return await easyWechats[index].wxApp.security.textCheck(request);
}