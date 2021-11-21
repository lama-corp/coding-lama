export default {
  data() {
    return {
      items: [
        {
          name: 'home',
          icon: 'home',
          to: {
            name: 'index',
          },
        },
        {
          name: 'news',
          icon: 'news',
          to: {
            name: 'contentType',
            params: { contentType: 'news' },
          },
        },
      ],
    }
  },
  computed: {
    selectedItem() {
      return this.items.find(
        (item) => this.$route.path === this.localePath(item.to)
      ).name
    },
  },
}
