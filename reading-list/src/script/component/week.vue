<template>
    <div>
        <h1 class="title is-1">{{ week.date }}</h1>
        <ol class="columns is-multiline is-mobile">
            <li v-for="issue of week.issues" class="column is-2-tablet is-6-mobile">
                <div class="card">
                    <div class="card-image image">
                        <img :src="issue.images.sm" />
                    </div>
                    <div class="card-content">
                        <p>{{issue.name}}</p>
                    </div>
                    <footer class="card-footer">
                        <router-link :to="{ name: 'series', params: { category: $route.params.category, title: issue.titleEncoded } }">{{issue.title}}</router-link>
                    </footer>
                </div>
            </li>
        </ol>
    </div>
</template>
<script lang="ts">
    import CompWeek from "./week";
    export default {
        data() {
            return { category: this.$route.params.category, week: {} }
        },
        created() {
            this.getData()
        },
        watch: {
            "$route": "getData"
        },
        methods: {
            async getData() {
                this.week = await CompWeek.getData(this.$route.params.category, this.$route.params.date);
            }
        }
    };
</script>