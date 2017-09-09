<template>
    <ol>
        <li v-for="item of series">
            <router-link :to="{ name: 'series', params: { category: category, title: item.titleEncoded } }">{{item.title}}</router-link>
        </li>
    </ol>
</template>
<script lang="ts">
    import CompCategory from "./category";
    export default {
        data() {
            return { category: this.$route.params.category, series: [], week: [] }
        },
        created() {
            this.getData()
        },
        watch: {
            "$route": "getData"
        },
        methods: {
            async getData() {
                let res = await CompCategory.getData(this.$route.params.category);
                this.series = res.series;
                this.week = res.week;
            }
        }
    };
</script>