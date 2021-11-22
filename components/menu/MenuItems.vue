<template>
  <div
    class="
      origin-top-right
      absolute
      right-0
      mt-2
      w-48
      rounded-md
      shadow-lg
      py-1
      bg-white
      ring-1 ring-black ring-opacity-5
      focus:outline-none
    "
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabindex="-1"
  >
    <NuxtLink
      v-for="item in items"
      id="user-menu-item-0"
      :key="item.name"
      :to="localePath(item.to)"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      role="menuitem"
      tabindex="-1"
    >
      {{ $t(`${tPath}.${item.name}`) }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'MenuItems',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    tPath: {
      type: String,
      default: 'common.action',
    },
  },
}
</script>
