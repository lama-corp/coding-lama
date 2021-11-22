<template>
  <div>
    <label
      v-if="label"
      for="price"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        v-if="prevLabel || prevIcon"
        class="
          absolute
          inset-y-0
          left-0
          pl-3
          flex
          items-center
          pointer-events-none
        "
      >
        <span v-if="prevLabel" class="text-gray-500 sm:text-sm">
          {{ prevLabel }}
        </span>
        <component
          :is="getIcon(prevIcon)"
          v-if="prevIcon"
          class="h-5 w-5 text-gray-400"
        />
      </div>
      <input
        id="price"
        type="text"
        name="price"
        class="
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          pr-12
          sm:text-sm
          border-gray-300
          rounded-md
        "
        :class="inputClass"
        :placeholder="placeholder"
        aria-describedby="price-currency"
      />
      <div
        v-if="nextLabel || nextIcon"
        class="
          absolute
          inset-y-0
          right-0
          pr-3
          flex
          items-center
          pointer-events-none
        "
      >
        <span
          v-if="nextLabel"
          id="price-currency"
          class="text-gray-500 sm:text-sm"
        >
          {{ nextLabel }}
        </span>
        <component
          :is="getIcon(nextIcon)"
          v-if="nextIcon"
          class="h-5 w-5 text-gray-400"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mixinIcons from '~/mixins/mixin-icons'

export default {
  name: 'InputText',
  mixins: [mixinIcons],
  props: {
    label: {
      type: String,
      default: '',
    },
    prevLabel: {
      type: String,
      default: '',
    },
    nextLabel: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    prevIcon: {
      type: String,
      default: '',
    },
    nextIcon: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputClass() {
      return this.prevIcon ? 'pl-10' : 'pl-7'
    },
  },
}
</script>
