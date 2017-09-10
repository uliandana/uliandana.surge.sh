import Vue from "vue";
import VueRouter from "vue-router";

const Home = require("../component/home.vue").default;
const Category = require("../component/category.vue").default;
const Series = require("../component/series.vue").default;
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: { template: "<div>Tentang daftar bacaan</div>" }
        },
        {
            path: "/create",
            name: "create",
            component: { template: "<div>Bikin daftar bacaan</div>" }
        },
        {
            path: "/list",
            name: "list",
            component: { template: "<div>Daftar bacaanku</div>" }
        },
        {
            path: "/:category",
            name: "category",
            component: Category
        },
        {
            path: "/:category/series/:title",
            name: "series",
            component: Series
        },
        {
            path: "/:category/week/:date",
            name: "week",
            component: { template: "<div>Tanggal: {{ $route.params.date }}</div>" }
        }
    ]
});