<template>
<Slide>
    <span><img width="20%" src="@/assets/briefcase.svg"><a class="title">Portfolio</a></span>
    <router-link to="/">
        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path class="primary" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            <path class="secondary" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"></path>
        </svg>
        <span>Home</span>
    </router-link>
    <!-- <router-link to="/about">
    <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path></svg>
    </router-link>-->
</Slide>
</template>

<script>
import {
    Slide
} from 'vue-burger-menu'

export default {
    components: {
        Slide
    }
}
</script>
