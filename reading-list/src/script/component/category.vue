<template>
    <div>
        <h1 class="title is-1">{{ category }}</h1>
        <h3 class="title is-3">Featured</h3>
        <section>
            <header><h3 class="title is-3">Find by Date</h3></header>
            <div>
                <div class="select">
                    <select v-model="select.year" v-on:change="selectDate" name="year">
                        <option v-for="item of week">{{ item.year }}</option>
                    </select>
                </div>
                <div class="select">
                    <select v-model="select.month" v-on:change="selectDate" name="month">
                        <option v-for="item of options.months">{{ item.month }}</option>
                    </select>
                </div>
                <div class="select">
                    <select v-model="select.date" v-on:change="selectDate" name="date">
                        <option v-for="item of options.dates">{{ item }}</option>
                    </select>
                </div>
                <router-link :to="{ name: 'week', params: { category: $route.params.category, date: weekTarget } }" class="button">find</router-link>
            </div>
        </section>
        <h3 class="title is-3">Complete List of Series</h3>
        <button class="button" v-on:click="toggleSeries">{{ showSeries.text}}</button>
        <ol v-if="showSeries.boolean" class="columns is-multiline is-mobile">
            <li v-for="item of series" class="column is-6">
                <router-link :to="{ name: 'series', params: { category: $route.params.category, title: item.titleEncoded } }" class="box">
                    <div class="is-size-5">{{item.title}}</div>
                    <div class="is-size-7">{{item.totalIssues}} issues <span class="tag" :class="issueStatus(item.status)">{{item.status}}</span></div>
                </router-link>
            </li>
        </ol>
    </div>
</template>
<script lang="ts">
    import CompCategory from "./category";
    export default {
        data() {
            return {
                category: "",
                series: [],
                week: [],
                select: {
                    year: "",
                    month: "",
                    date: ""
                },
                options: {
                    months: [],
                    dates: []
                },
                weekTarget: "",
                showSeries: {
                    boolean: false,
                    text: ""
                }
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
                let res = await CompCategory.getData(this.$route.params.category);
                this.category = res.category;
                this.series = res.series;
                this.week = res.week;
                this.select = res.select;
                this.options = res.options;
                this.weekTarget = res.weekTarget;
                this.showSeries = {
                    boolean: false,
                    text: `Show all (${this.series.length} series)`
                };
            },

            selectDate(event) {
                let name = event.target.name;
                let value = event.target.value;

                if (name == "year") {
                    this.options.months = CompCategory.getMonthsByYear(value, this.week);
                    this.select.month = this.options.months[0].month;
                    this.options.dates = CompCategory.getDatesByMonth(this.select.month, this.options.months);
                    this.select.date = this.options.dates[0];
                } else if (name == "month") {
                    this.options.dates = CompCategory.getDatesByMonth(value, this.options.months);
                    this.select.date = this.options.dates[0];
                }

                this.weekTarget = `${this.select.year}-${this.select.month}-${this.select.date}`;
            },

            toggleSeries() {
                this.showSeries.boolean = !this.showSeries.boolean;
                this.showSeries.text = this.showSeries.boolean ? "Hide all" : `Show all (${this.series.length} series)`;
            },

            issueStatus(status) {
                if (status === "completed") return "is-success";
                else if (status === "ongoing") return "is-primary";
                else if (status === "incomplete") return "is-warning";
            }
        }
    };
</script>