const Brands = Vue.component('Brands', {
  template: `
    <div class="page brands">
      <h1> Brands </h1>
    </div>
  `
})
const Contacts = Vue.component('Contacts', {
  template: `
    <div class="page contacts">
      <h1> Contacts </h1>
    </div>
  `
})
const Projects = Vue.component('Projects', {
  template: `
    <div class="page projects">
      <h1> Projects </h1>
    </div>
  `
})


const router = new VueRouter({
  routes: [
    { path: '/brands', component: Brands },
    { path: '/contacts', component: Contacts },
    { path: '/projects', component: Projects },
  ]
})

new Vue({
    el: "#app",
    data: {
        show: false
    },
    router: router
})
