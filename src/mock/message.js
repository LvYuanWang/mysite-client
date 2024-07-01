// import Mock from 'mockjs';
// import qs from 'querystring';

// Mock.mock('/api/message', 'post', function (messageInfo = {}) {
//     const { nickname, content } = JSON.parse(messageInfo.body);
//     return Mock.mock({
//         code: 0,
//         msg: "",
//         data: {
//             id: "@guid",
//             nickname: nickname || "@cname",
//             content: content || "@cparagraph(1, 10)",
//             createDate: "@datetime",
//             avatar: "https://api.t1qq.com/api/tool/sjtx?key=TRb9LTxQuryTUx4aDt5QYloNrM&tx=@guid"
//         }
//     })
// })

// Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
//     const query = qs.parse(options.url);
//     return Mock.mock({
//         code: 0,
//         msg: '',
//         data: {
//             total: 105,
//             [`rows|${query.limit || 10}`]: [
//                 {
//                     id: "@guid",
//                     nickname: "@cname",
//                     content: "@cparagraph(1, 10)",
//                     createDate: "@datetime",
//                     avatar: "https://api.t1qq.com/api/tool/sjtx?key=TRb9LTxQuryTUx4aDt5QYloNrM&tx=@guid"
//                 }
//             ]
//         }
//     })
// })