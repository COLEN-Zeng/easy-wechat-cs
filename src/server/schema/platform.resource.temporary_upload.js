const { array, object, string, integer, empty, oneOf } = require('@qtk/schema').schema;

const info = {
    title: "公众号-临时资源上传",
    description: ""
};

const request = {
    index: integer(),
    request: object({
        type: string()
            .enum('video', 'image', 'voice', 'thumb')
            .desc('媒体类型'),
        resourceBase64: string().desc('base64头像'),
        filename: string().desc('文件名，带后缀名')
    })
        .require('type', 'resourceBase64', 'filename')
};

const response = object({
    type: string()
        .enum('video', 'image', 'voice', 'thumb')
        .desc('媒体类型'),
    mediaId: string().desc('资源id'),
    createdAt: integer().desc('资源创建时间')
})
    .requireAll();

module.exports = { info, request, response };