// 设置标题
let siteTitle = "", controllTitle = "";

function setTitle() {
    if (!siteTitle && !controllTitle) {
        document.title = "loading...";
    } else if (siteTitle && !controllTitle) {
        document.title = siteTitle;
    } else if (!siteTitle && controllTitle) {
        document.title = controllTitle;
    } else {
        document.title = `${controllTitle}-${siteTitle}`;
    }
}

export default {
    // 设置网站标题
    setSiteTitle(title) {
        siteTitle = title;
        setTitle();
    },
    // 设置路由标题
    setControllTitle(title) {
        controllTitle = title;
        setTitle();
    }
}