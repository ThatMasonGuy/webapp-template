<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="../assets/images/logo.png" alt="Logo">
            </a>
            <button class="navbar-burger" @click="toggleMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
            <div class="navbar-start">
                <a class="navbar-item" href="#">Home</a>
                <a class="navbar-item" href="#">About</a>
                <a class="navbar-item" href="#">Services</a>
                <a class="navbar-item" href="#">Contact</a>
            </div>

            <div class="navbar-end">
                <a class="navbar-item" href="#">
                    <UserIcon class="icon" />
                    <span>Account</span>
                </a>
                <a class="navbar-item" href="#">
                    <ShoppingCartIcon class="icon" />
                    <span>Cart</span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from 'vue';
import { UserIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
    components: {
        UserIcon,
        ShoppingCartIcon,
    },
    data() {
        return {
            isMenuActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
    },
});
</script>

<style>
.navbar {
    @apply bg-gray-800 text-white;
}

.navbar-brand {
    @apply flex items-center;
}

.navbar-burger {
    @apply block md:hidden;
}

.navbar-menu {
    @apply flex flex-col items-center md:flex-row md:space-x-4;
}

.navbar-start,
.navbar-end {
    @apply flex items-center;
}

.navbar-item {
    @apply px-4 py-2 text-white hover:bg-gray-700;
}

.icon {
    @apply mr-2;
}
</style>
