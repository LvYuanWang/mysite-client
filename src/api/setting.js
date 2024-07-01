import resp from "./request";

export default async function getSetting() {
    return await resp.get('/api/setting');
}