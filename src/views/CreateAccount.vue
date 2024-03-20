<template>
    <v-container>
        <v-form @submit.prevent="submit">
            <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            <v-btn type="submit">Create Account</v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        submit() {
            // Create account logic here
        },
    },
};
</script>

<style scoped>

</style>
