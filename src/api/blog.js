import resp from './request';

/**
 * 分页获取博客列表
 * @param {Number} page 当前页码
 * @param {Number} limit 页容量
 * @param {Number} categoryid 所属分类
 * @returns 分页获取的博客列表
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await resp.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    })
}

/**
 * 获取所有博客分类
 * @returns 分类的博客列表
 */
export async function getBlogType() {
    return await resp.get('/api/blogtype');
}

/**
 * 获取单个博客
 * @param {Number} id 
 * @returns 单个博客数据
 */
export async function getBlogsById(id) {
    return await resp.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {String} commentInfo 用户评论的数据: {nickname(昵称), content(评论内容), blogId(评论的博客Id)}
 * @returns 
 */
export async function postComments(commentInfo) {
    return await resp.post('/api/comment', commentInfo);
}

/**
 * 分页获取评论
 * @param {Number} blogId 
 * @param {Number} page 
 * @param {Number} limit 
 */
export async function getComments(blogId, page = 1, limit = 10) {
    return await resp.get('/api/comment', {
        params: {
            blogId,
            page,
            limit
        }
    })
}