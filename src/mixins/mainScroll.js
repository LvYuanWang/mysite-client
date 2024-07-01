export default function (refDom) {
    return {
        mounted() {
            this.$refs[refDom].addEventListener("scroll", this.handlemainScroll);
            this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$refs[refDom].removeEventListener("scroll", this.handlemainScroll);
            this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        },
        methods: {
            handlemainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refDom]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refDom].scrollTop = scrollTop;
            }
        },
    }
}