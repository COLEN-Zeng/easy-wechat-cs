module.exports = async ({request: {request, index}}) => {
    return await easyWechats[index].platform.menu.delete(request);
}