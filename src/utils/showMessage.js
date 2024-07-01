import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon';
import styles from './showMessage.module.less';
/**
 * 弹出消息
 * @param {Object} options 消息数据对象: {content, type, duration, container, onClose}
 */
export default function (options = {}) {
    const content = options.content || '';
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement('div');
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    const iconDom = getComponentRootDom(Icon, { type });
    div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`;
    if (options.container) {
        getComputedStyle(container).position === 'static' && (container.style.position = 'relative');
    }
    container.appendChild(div);

    // 浏览器强行渲染
    div.clientHeight;

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        // 监听动画结束事件: 动画结束后删除元素
        div.addEventListener('transitionend', function () {
            div.remove();
            options.onClose && options.onClose();
        }, { once: true });
    }, duration);
}