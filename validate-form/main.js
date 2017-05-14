new Vue({
    el: "#app",
    data: {
        name: '',
        password: '',
    },
    computed: {
      notify() {
        return this.isValid ? "Надежный пароль!" : "Пароль должен содержать не менее 8 символов"
      },
      isValid() {
        return this.password.length > 7
      }
    },
})
