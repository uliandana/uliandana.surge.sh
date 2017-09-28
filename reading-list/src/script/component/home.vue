<template>
    <div>
        <!--<section class="section">
            <div class="container">
                <p>Daftar bacaanmu kosong. <router-link to="/create">Mulai bikin daftar bacaan.</router-link></p>
            </div>
        </section>-->
        <section class="carousel">
            <h3 class="title is-3">New Issues</h3>
            <div class="carousel-item-wrapper">
                <a class="carousel-arrow-left" v-on:click="slide(-1)" v-if="carouselIndex > 0">
                    <span><i class="mdi mdi-chevron-left"></i></span>
                </a>
                <a class="carousel-arrow-right" v-on:click="slide(1)" v-if="carouselIndex < 3">
                    <span><i class="mdi mdi-chevron-right"></i></span>
                </a>
                <div class="carousel-item" v-for="issue of latestIssues">
                    <div class="carousel-content">
                        <router-link :to="{ name: 'week', params: { category: issue.categoryEncoded, date: issue.date } }">
                            <img :src="issue.images.sm" class="carousel-content-image" />
                            <div class="carousel-content-info">
                                <span class="tag is-primary">{{issue.category}}</span>
                                <span class="tag is-primary">{{issue.date}}</span>
                                <p>{{issue.name}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="section is-hidden-mobile">
            <div class="container">
                <h3 class="title is-3">New Issues</h3>
                <ol class="columns is-multiline is-mobile">
                    <li v-for="issue of latestIssues" class="column is-3-tablet is-6-mobile">
                        <router-link :to="{ name: 'week', params: { category: issue.categoryEncoded, date: issue.date } }">
                            <div class="card">
                                <div class="card-image image">
                                    <img :src="issue.images.sm" />
                                </div>
                                <div class="card-content">
                                    <p>{{issue.name}}</p>
                                    <span class="tag is-primary">{{issue.category}}</span>
                                    <span class="tag is-primary">{{issue.date}}</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ol>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
    import CompHome from "./home";
    export default {
        data() {
            return {
                latestIssues: [],
                carouselIndex: 0
            }
        },
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                this.latestIssues = await CompHome.getData();
            },

            slide(direction) {
                this.carouselIndex = this.carouselIndex + direction;
                let carouselItems = document.getElementsByClassName("carousel-item") as HTMLCollectionOf<HTMLElement>;
                for (var i = 0; i < carouselItems.length; i++) {
                    carouselItems[i].style.transform = `translateX(${this.carouselIndex * -100}%)`;
                };
            }
        }
    }
</script>