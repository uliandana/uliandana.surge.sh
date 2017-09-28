<template>
    <div>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <h1 class="title">{{ series.title }}</h1>
                <p class="subtitle">{{ series.totalIssues }} issues | {{ series.status }}</p>
            </div>
            <div class="hero-footer">
                <router-link
                    class="is-pulled-left"
                    v-if="series.prevTitle"
                    :to="{ name: 'series', params: { category: $route.params.category, title: series.prevTitleEncoded } }"
                ><i class="mdi mdi-chevron-left"></i>{{ series.prevTitle }}</router-link>
                <router-link
                    class="is-pulled-right"
                    v-if="series.nextTitle"
                    :to="{ name: 'series', params: { category: $route.params.category, title: series.nextTitleEncoded } }"
                >{{ series.nextTitle }}<i class="mdi mdi-chevron-right"></i></router-link>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <ol class="columns is-multiline is-mobile">
                    <li v-for="issue of series.issues" class="column is-3-tablet is-6-mobile">
                        <a v-on:click="toggleModal(issue.images.sm)">
                            <div class="card">
                                <div class="card-image image">
                                    <img :src="issue.images.sm" />
                                </div>
                                <div class="card-content">
                                    <p>{{issue.name}}</p>
                                </div>
                                <footer class="card-footer">
                                    <div class="card-footer-item">
                                        <router-link
                                            :to="{ name: 'week', params: { category: $route.params.category, date: issue.date } }"
                                        >{{issue.date}}</router-link>
                                    </div>
                                </footer>
                            </div>
                        </a>
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
        </section>
        <div id="modal" class="modal" :class="">
            <div class="modal-background"></div>
            <div class="modal-content has-text-centered">
                <img :src="modalImage" />
            </div>
            <button class="modal-close is-large" v-on:click="toggleModal('')"></button>
        </div>
    </div>
</template>
<script lang="ts">
    import CompSeries from "./series";
    export default {
        data() {
            return {
                category: this.$route.params.category,
                series: {},
                pages: [],
                modalImage: ""
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
                this.toggleModal("");
            },

            toggleModal(image) {
                this.modalImage = image;
                let modalClass = document.getElementById("modal").classList
                !image ? modalClass.remove("is-active") : modalClass.add("is-active");
            }
        }
    };
</script>