import resp from "./request";

export default async function getAbout() {
    return await resp.get('/api/about');
}