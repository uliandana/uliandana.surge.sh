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
    </div>
</template>
<script lang="ts">
    import CompSeries from "./series";
    export default {
        data() {
            return { category: this.$route.params.category, series: {} }
        },
        created() {
            this.getData()
        },
        watch: {
            "$route": "getData"
        },
        methods: {
            async getData() {
                this.series = await CompSeries.getData(this.$route.params.category, this.$route.params.title, "1");
            }
        }
    };
</script>