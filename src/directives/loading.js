import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less';

// 得到el中的loading效果的img元素
function getLoadingImage(el) {
    return el.querySelector('img[data-role=loading]');
}

function createLoadingImg() {
    const img = document.createElement('img');
    img.dataset.role = 'loading';
    img.className = styles.loading;
    img.src = loadingUrl;
    return img;
}

// 导出指定的配置对象
export default function (el, binding) {
    // 根据binding.value的值,决定创建或删除img元素
    const curImg = getLoadingImage(el);
    if (binding.value) {
        // 查看el中是否有img元素,如果没有则创建并添加到el中
        if (!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        // 查看el中是否有img元素,如果有则删除
        if (curImg) {
            curImg.remove();
        }
    }
}