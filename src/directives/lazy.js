import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif;
    // 处理图片
    // 该图片是否在视口的范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    if (rect.top >= -rect.height && rect.top <= clientHeight) {
        // 在视口范围内
        // const tempImg = new Image();
        // tempImg.onload = () => {
        //     img.dom.src = img.src;
        // }
        // tempImg.src = img.src;
        img.dom.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }
}

// 调用该函数, 就可以设置那些合适的图片
function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 500));

export default {
    // 指令的定义
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        };
        imgs.push(img);
        setImage(img);
    },
    // 当被绑定的元素插入到 DOM 中时……
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
};