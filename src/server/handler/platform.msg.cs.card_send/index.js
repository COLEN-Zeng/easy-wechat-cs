module.exports = async ({request: {request, index}}) => {
    return await easyWechats[index].platform.msg.cs.cardSend(request);
}