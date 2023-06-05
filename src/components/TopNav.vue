<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const hasScrolled = ref(true);
const hasScrolledNum = ref(0);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  hasScrolled.value = scrollTop < 270;
  hasScrolledNum.value++;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="w-full fixed py-5 text-[--black] flex justify-between px-10 items-center"
    :class="{ fadeout: !hasScrolled, fadein: hasScrolled && hasScrolledNum }"
  >
    <!-- <img src="@/assets/logo.jpg" alt="asd" class="w-[30px] h-[30px]" /> -->
    <div class="flex gap-8 justify-between items-center">
      <p class="font-akira">AP</p>
      <p class="w-32 h-1 bg-[--black]"></p>
    </div>
    <div class="flex gap-8 justify-between items-center">
      <p class="w-12 h-1 bg-[--white]"></p>
      <p class="w-32 h-1 bg-[--white]"></p>
    </div>
  </div>
</template>

<style>
.fadeout {
  opacity: 0;
  transition: opacity 0.5s ease;
  animation: fade-out 0.5s;
}

@keyframes fade-out {
  0% {
    top: 0;
  }

  100% {
    top: -100px;
  }
}

.fadein {
  opacity: 1;
  transition: opacity 0.5s ease;
  animation: fade-in 0.5s;
}

@keyframes fade-in {
  0% {
    top: -100px;
  }

  100% {
    top: 0;
  }
}
</style>
