import { ref } from 'vue';

const auth = getAuth();
const isAuthenticated = ref(false);

onAuthStateChanged(auth, (user) => {
  isAuthenticated.value = !!user;
});

export { isAuthenticated };