export default {
  methods: {
    getIcon(iconName) {
      return require(`~/assets/svg/${iconName}.svg?inline`)
    },
  },
}
