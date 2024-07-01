import resp from './request';

export async function postMessage(messageInfo) {
    return await resp.post('/api/message', messageInfo);
}

export async function getMessages(page = 1, limit = 10) {
    return await resp.get('/api/message', {
        params: {
            page,
            limit
        }
    })
}