html
<template>
    <div class="login-container">
        <form @submit.prevent="login">
            <input type="text" v-model="username" placeholder="Username" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Perform login logic here
        }
    }
}
</script>

<style>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 300px;
    padding: 10px;
    margin: 10px;
}

button {
    width: 300px;
    padding: 10px;
    margin: 10px;
    background-color: #008000;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
