import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/:category",
            name: "category",
            component: { template: "<div>Kategori: {{ $route.params.category }}</div>" }
        },
        {
            path: "/:category/:title",
            name: "series",
            component: { template: "<div>Seri: {{ $route.params.title }}</div>" }
        },
        {
            path: "/:category/week/:date",
            name: "series",
            component: { template: "<div>Tanggal: {{ $route.params.date }}</div>" }
        }
    ]
});