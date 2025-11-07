<template>
    <h1>Job</h1>
    <!-- Foreach the data from array object -->
    <div v-for="jobs in job" :key="jobs.id">
        <!-- go to JobDetails by id using router-link  -->
       <router-link :to="{name: 'JobDetails' , params: { id: jobs.id }}">
        <h2>{{ jobs.title }}</h2>
       </router-link>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // This is Array of Object

                job:[
                    {id:1, title:"Frontend Developer", content:"Responsible for implementing visual elements that users see and interact with in a web application."},
                    {id:2, title:"Backend Developer", content:"Focuses on server-side development, databases, and application logic."},
                    {id:3, title:"Full Stack Developer", content:"Proficient in both frontend and backend development."},
                    {id:4, title:"DevOps Engineer", content:"Bridges the gap between development and operations teams to streamline software delivery."},
                    {id:5, title:"Data Scientist", content:"Analyzes and interprets complex data to help organizations make informed decisions."}
                ]
            }
        }
    }
</script>