<template>
  <header class="w-full">
    <div
      class="
        relative
        z-10
        flex-shrink-0
        h-16
        bg-white
        border-b border-gray-200
        shadow-sm
        flex
      "
    >
      <button
        type="button"
        class="
          border-r border-gray-200
          px-4
          text-gray-500
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
          md:hidden
        "
        @click="$emit('open-sidebar')"
      >
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/menu-alt-2 -->
        <component :is="getIcon('menu')" class="h-6 w-6" />
      </button>
      <div class="flex-1 flex justify-between px-4 sm:px-6">
        <div class="flex-1 flex">
          <form
            class="w-full h-full flex items-center md:justify-center"
            action="#"
            method="GET"
          >
            <InputText prev-icon="search-solid" class="md:w-1/2 w-full" />
          </form>
        </div>
        <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
          <div class="relative flex-shrink-0">
            <div>
              <button
                v-click-outside="closeAddMenu"
                type="button"
                class="
                  flex
                  bg-indigo-600
                  p-1
                  rounded-full
                  items-center
                  justify-center
                  text-white
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                @click="displayAddMenu = !displayAddMenu"
              >
                <component :is="getIcon('plus-sm')" class="h-6 w-6" />
                <span class="sr-only">Add content / creator</span>
              </button>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-100"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems v-if="displayAddMenu" :items="addMenuItems" />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import InputText from '../input/InputText'
import mixinIcons from '~/mixins/mixin-icons'

export default {
  name: 'LayoutHeader',
  components: { InputText },
  mixins: [mixinIcons],
  data: () => ({
    displayAddMenu: false,
    addMenuItems: [
      {
        name: 'addCreator',
        to: { name: 'add-addType', params: { addType: 'creator' } },
      },
      {
        name: 'addVideo',
        to: { name: 'add-addType', params: { addType: 'video' } },
      },
    ],
  }),
  methods: {
    closeAddMenu() {
      this.displayAddMenu = false
    },
  },
}
</script>
