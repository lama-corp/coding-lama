<template>
  <div class="hidden w-28 overflow-y-auto md:block">
    <div class="w-full py-6 flex flex-col items-center">
      <div class="flex-shrink-0 flex items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=black"
          alt="Workflow"
        />
      </div>
      <div class="flex-1 mt-6 w-full px-2 space-y-1">
        <NuxtLink
          v-for="item in items"
          :key="item.name"
          :to="localePath(item.to)"
          class="
            text-black
            hover:bg-gray-100
            group
            w-full
            p-3
            rounded-md
            flex flex-col
            items-center
            text-xs
            font-medium
          "
          :class="itemClass(item)"
        >
          <component
            :is="getIcon(iconName(item))"
            class="group-hover:text-black h-6 w-6"
          />
          <span class="mt-2">
            {{ $t(`components.layout.sidebar.${item.name}`) }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import extendLayoutSidebar from '~/extends/layout/extend-layout-sidebar'
import mixinIcons from '~/mixins/mixin-icons'

export default {
  name: 'LayoutSidebar',
  extends: extendLayoutSidebar,
  mixins: [mixinIcons],
  methods: {
    itemClass(item) {
      return this.selectedItem === item.name ? 'bg-gray-200' : ''
    },
    iconName(item) {
      return `${item.icon}${this.selectedItem === item.name ? '-solid' : ''}`
    },
  },
}
</script>
