<template>
  <div class="min-h-screen h-full flex">
    <LayoutSidebarDesktop />
    <LayoutSidebarMobile
      :display-sidebar="displaySidebar"
      @close-sidebar="toggleSidebar"
    />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      displaySidebar: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.displaySidebar = !this.displaySidebar
    },
  },
}
</script>
