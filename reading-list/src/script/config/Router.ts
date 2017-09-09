import Vue from "vue";
import VueRouter from "vue-router";

const Home = require("../component/home.vue").default;
const Category = require("../component/category.vue").default;
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/:category",
            name: "category",
            component: Category
        },
        {
            path: "/:category/series/:title",
            name: "series",
            component: { template: "<div>Seri: {{ $route.params.title }}</div>" }
        },
        {
            path: "/:category/week/:date",
            name: "week",
            component: { template: "<div>Tanggal: {{ $route.params.date }}</div>" }
        },
        {
            path: "/:category/issue/:name",
            name: "issue",
            component: { template: "<div>Isu: {{ $route.params.name }}</div>" }
        }
    ]
});