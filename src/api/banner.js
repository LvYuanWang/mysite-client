import resp from './request';
export default async function getBanners() {
    return await resp.get('/api/banner');
}