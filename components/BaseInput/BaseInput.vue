<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    :name="name"
    tag="div"
    class="base-input"
  >
    <input
      :type="type" 
      :value="value"
      :name="name"
      :disabled="disabled" 
      :id="name"
      @input="updateValue" 
      @change="updateValue" 
      @blur="$emit('blur')" 
      @focus="$emit('focus')"
      class="base-input__inner"
      :placeholder="label"
    />
    <label class="base-input__label" :for="name">
      {{ label }}
    </label>
    <span class="base-input__border" />
    <transition name="fade">
      <span class="base-input__error" v-if="errors[0]">
        {{ errors[0] }}
      </span>
    </transition>
  </validation-provider>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: [String, Number],
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    name: {
      type: String,
      required: false,
      default: 'Field',
    },
    rules: {
      type: [String, Object],
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped src="./BaseInput.scss" />
