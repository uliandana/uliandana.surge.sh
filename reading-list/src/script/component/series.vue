<template>
    <div>
        <h1 class="title is-1">{{ series.title }}</h1>
        <ol class="columns is-multiline is-mobile">
            <li v-for="issue of series.issues" class="column is-2-tablet is-6-mobile">
                <div class="card">
                    <div class="card-image image">
                        <img :src="issue.images.sm" />
                    </div>
                    <div class="card-content">
                        <p>{{issue.name}}</p>
                    </div>
                    <footer class="card-footer">
                        <router-link :to="{ name: 'week', params: { category: $route.params.category, date: issue.date } }">{{issue.date}}</router-link>
                    </footer>
                </div>
            </li>
        </ol>
        <nav class="pagination">
            <ul class="pagination-list">
                <li v-for="page of pages">
                    <span v-if="page.isEllips" class="pagination-ellipsis">&hellip;</span>
                    <router-link
                        v-else
                        :to="{ name: 'series', params: { category: $route.params.category, title: series.titleEncoded}, query: {page: page.number} }"
                        class="pagination-link" :class="page.isCurrent"
                    >
                    {{page.number}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script lang="ts">
    import CompSeries from "./series";
    export default {
        data() {
            return {
                category: this.$route.params.category,
                series: {},
                pages: []
            }
        },
        created() {
            this.getData()
        },
        watch: {
            "$route": "getData"
        },
        methods: {
            async getData() {
                let page = this.$route.query.page;
                if (typeof page === "undefined" || page.match(/[^0-9]/) || page <= 0) page = "1";
                this.series = await CompSeries.getData(this.$route.params.category, this.$route.params.title, page);
                this.pages = CompSeries.setPagination(this.series.page, this.series.totalPages);
            }
        }
    };
</script>