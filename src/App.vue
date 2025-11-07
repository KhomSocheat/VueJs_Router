<template>
    <div >
        <nav>
            <router-link to="/">Home</router-link>
            <!-- Using name not only url -->
            <router-link :to="{name: 'About'}">About</router-link>
            <router-link :to="{name: 'Job'}">Job</router-link>
        </nav>
        <div class="button-container">
            <button class="btn" @click="redirect">Redirect</button>
            <button class="btn" @click="goBack">Go back</button>
            <button class="btn" @click="goForward">Go forward</button>
        </div>
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'App',
    methods: {
        redirect(){
          this.$router.push({name:'About'});
        },
        goBack(){
          this.$router.go(-1);
        },
        goForward(){
          this.$router.go(1);
        }
    }
}
</script>
<style scoped>
/* Center all content */
div {
  text-align: center;
}

/* Your existing link styles */
a {
  position: relative;
  margin: 0 10px;
  text-decoration: none;
  color: black;
  padding-bottom: 4px; /* space for border */
  padding-left: 8px;  /* extend left */
  padding-right: 8px; /* extend right */
}

/* Active underline */
a.router-link-active {
  border-bottom: 2px solid red;
  border-radius: 2px;
}

/* Button container styling */
.button-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

/* Button styling */
.btn {
  padding: 10px 20px;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
  border-color: #0056b3;
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
}

/* Navigation styling */
nav {
  margin: 20px 0;
  padding: 15px;
}
</style>