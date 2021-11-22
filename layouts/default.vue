<template>
  <div class="min-h-screen h-full flex">
    <LayoutSidebarDesktop />
    <LayoutSidebarMobile
      :display-sidebar="displaySidebar"
      @close-sidebar="toggleSidebar"
    />

    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <LayoutHeader @open-sidebar="toggleSidebar" />

      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <!-- Primary column -->
          <section
            aria-labelledby="primary-heading"
            class="min-w-0 flex-1 h-full flex flex-col lg:order-last"
          >
            <Nuxt />
          </section>
        </main>
      </div>
    </div>
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
