<template>
    <div>
        <h2>{{ series.title }}</h2>
        <ol>
            <li v-for="item of series.issues">
                <img :src="item.images.xs" />
                <p>{{item.name}}</p>
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