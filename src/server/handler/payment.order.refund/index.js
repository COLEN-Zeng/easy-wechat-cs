module.exports = async ({request: {request, index}}) => {
    return await easyWechats[index].payment.order.refund(request);
}