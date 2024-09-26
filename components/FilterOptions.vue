<template>
  <div class="border p-1 sm:p-3">
    <div @click.capture="displayOptionsFilter" class="flex items-center justify-between cursor-pointer">
      <p class="font-semibold">{{ headingName }}</p>
      <i class="plus-minus-toggle collapsed relative right-4 sm:right-6"></i>
    </div>
    <div id="optionsFilter" class="hidden mt-3">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  headingName: string;

}>()
const displayOptionsFilter = (event: Event) => {
  event.stopPropagation();
  const target = event.currentTarget as HTMLElement;
  const plusMinus = target.children[1] as HTMLElement;
  plusMinus.classList.toggle("collapsed");
  const optionsFilter = target.nextElementSibling as HTMLSelectElement;
  optionsFilter.classList.toggle('hidden');
};

</script>

<style scoped>
.plus-minus-toggle {
  bottom: 2px;
  position: relative;

  &:before,
  &:after {
    background: #000;
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    top: 0;
    width: 15px;
    transition: transform 500ms ease;
  }

  &:after {
    transform-origin: center;
  }

  &.collapsed {
    &:after {
      transform: rotate(90deg);
    }

    &:before {
      transform: rotate(180deg);
    }
  }
}
</style>