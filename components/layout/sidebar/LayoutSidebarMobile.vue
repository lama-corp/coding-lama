<template>
  <div class="md:hidden" role="dialog" aria-modal="true">
    <div v-if="displaySidebar" class="fixed inset-0 z-40 flex">
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
      ></div>
      <div
        v-click-outside="close"
        class="
          relative
          max-w-xs
          w-full
          bg-indigo-700
          pt-5
          pb-4
          flex-1 flex flex-col
        "
      >
        <div class="absolute top-1 right-0 -mr-14 p-1">
          <button
            type="button"
            class="
              h-12
              w-12
              rounded-full
              flex
              items-center
              justify-center
              focus:outline-none focus:ring-2 focus:ring-white
            "
            @click="$emit('close-sidebar')"
          >
            <!-- Heroicon name: outline/x -->
            <component :is="getIcon('cross')" class="h-6 w-6 text-white" />
            <span class="sr-only">{{ $t('common.action.close') }}</span>
          </button>
        </div>

        <div class="flex-shrink-0 px-4 flex items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
            alt="Workflow"
          />
        </div>
        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
          <nav class="h-full flex flex-col">
            <div class="space-y-1">
              <a
                v-for="item in items"
                :key="item.name"
                href="#"
                class="
                  text-indigo-100
                  hover:bg-indigo-800 hover:text-white
                  group
                  py-2
                  px-3
                  rounded-md
                  flex
                  items-center
                  text-sm
                  font-medium
                "
              >
                <!--
                  Heroicon name: outline/home

                  Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
                -->
                <component
                  :is="getIcon(item.icon)"
                  class="group-hover:text-white h-6 w-6"
                />
                <span>{{ $t(`components.layout.sidebar.${item.name}`) }}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script>
import extendLayoutSidebar from '~/extends/layout/extend-layout-sidebar'
import mixinIcons from '~/mixins/mixin-icons'

export default {
  name: 'LayoutSidebarMobile',
  extends: extendLayoutSidebar,
  mixins: [mixinIcons],
  props: {
    displaySidebar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close-sidebar')
    },
  },
}
</script>
