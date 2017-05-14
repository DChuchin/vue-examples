Vue.component('tabs', {
  template: `
    <div id="tabs-container">
      <ul class="tabs-menu">
        <li v-for="tab in tabs" :class="{'current': tab.isActive}">
          <a href="#tab-1" @click="selectTab(tab)">{{tab.name}}</a>
        </li>
      </ul>
      <slot></slot>
    </div>
  `,
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.href == selectedTab.href);
      });
    }
  }
})

Vue.component('tab', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,

  props: {
    name: {
      required: true,
    },

    selected: {
      default: false,
    },
  },

  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  },

})

new Vue({
  el: '#app',
})
