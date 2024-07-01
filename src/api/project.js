import resp from './request';

export default async function getProjects() {
    return await resp.get('/api/project');
}