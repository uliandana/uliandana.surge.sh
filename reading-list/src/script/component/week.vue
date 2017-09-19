<template>
    <div>
        <h1 class="title is-1">{{ week.date }}</h1>
        <ol class="columns is-multiline is-mobile">
            <li v-for="issue of week.issues" class="column is-3-tablet is-6-mobile">
               <a v-on:click="toggleModal(issue.images.md)">
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
                                :to="{ name: 'series', params: { category: $route.params.category, title: issue.titleEncoded } }"
                            >{{issue.title}}</router-link>
                            </div>
                        </footer>
                    </div>
                </a>
            </li>
        </ol>
        <div id="modal" class="modal" :class="">
            <div class="modal-background"></div>
            <div class="modal-content">
                <img :src="modalImage" />
            </div>
            <button class="modal-close is-large" v-on:click="toggleModal('')"></button>
        </div>
    </div>
</template>
<script lang="ts">
    import CompWeek from "./week";
    export default {
        data() {
            return {
                category: this.$route.params.category,
                week: {},
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
                this.week = await CompWeek.getData(this.$route.params.category, this.$route.params.date);
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