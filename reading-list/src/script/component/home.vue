<template>
    <div>
        <ul>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/list">My List</router-link>
            </li>
            <li>
                <router-link to="/new-52">New 52</router-link>
            </li>
            <li>
                <router-link to="/rebirth">Rebirth</router-link>
            </li>
        </ul>
        <p>Daftar bacaanmu kosong. <router-link to="/create">Mulai bikin daftar bacaan.</router-link></p>
        <h3>Isu Terbaru</h3>
        <p>Kosong</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>