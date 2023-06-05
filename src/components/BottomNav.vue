<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const hasScrolled = ref(true);
const projectsScroll = ref(false);
const aboutScroll = ref(false);
const scrollWhite = ref(false);
// const contactScroll = ref(false);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  hasScrolled.value = scrollTop < 230;
  projectsScroll.value = scrollTop > 230 && scrollTop < 5060;
  aboutScroll.value = scrollTop > 5060;
  scrollWhite.value = scrollTop > 5060;
  console.log(projectsScroll.value);
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
    class="fixed left-0 bottom-0 px-14 py-20"
    :class="{ hidden: !hasScrolled }"
  >
    <ul
      class="font-inter text-sm font-semibold flex flex-col gap-3 uppercase text-[--black] list-disc"
    >
      <li>
        <a
          href="#projects"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Projects</a
        >
      </li>
      <li>
        <a
          href="#about"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >About</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Contact</a
        >
      </li>
    </ul>
  </div>
  <div
    class="fixed left-0 bottom-0 px-14 py-20"
    :class="{ hidden: hasScrolled }"
  >
    <ul
      class="font-inter text-sm font-semibold flex flex-col gap-24 uppercase text-[--white]"
      v-motion-slide-visible-left
    >
      <li class="flex gap-5 items-center">
        <div class="w-10 h-10 rounded-full bg-[--white] relative">
          <div
            class="bg-[--black] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !projectsScroll }"
          ></div>
          <div class="h-36 w-2 bg-[--white] m-auto"></div>
        </div>
        <a
          href="#projects"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Projects</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div class="w-10 h-10 rounded-full bg-[--white] relative">
          <div
            class="bg-[--black] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !aboutScroll }"
          ></div>
          <div class="h-36 w-2 bg-[--white] m-auto"></div>
        </div>
        <a
          href="#about"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >About</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div
          class="w-10 h-10 rounded-full bg-[--white] flex justify-center"
        ></div>
        <a
          href="#contact"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Contact</a
        >
      </li>
    </ul>
  </div>
  <div
    class="fixed left-0 bottom-0 px-14 py-20"
    :class="{ hidden: !scrollWhite }"
  >
    <ul
      class="font-inter text-sm font-semibold flex flex-col gap-24 uppercase text-[--black]"
      v-motion-slide-visible-left
    >
      <li class="flex gap-5 items-center">
        <div class="w-10 h-10 rounded-full bg-[--black] relative">
          <div
            class="bg-[--white] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !projectsScroll }"
          ></div>
          <div class="h-36 w-2 bg-[--black] m-auto"></div>
        </div>
        <a
          href="#projects"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Projects</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div class="w-10 h-10 rounded-full bg-[--black] relative">
          <div
            class="bg-[--white] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !aboutScroll }"
          ></div>
          <div class="h-36 w-2 bg-[--black] m-auto"></div>
        </div>
        <a
          href="#about"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >About</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div
          class="w-10 h-10 rounded-full bg-[--black] flex justify-center"
        ></div>
        <a
          href="#contact"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Contact</a
        >
      </li>
    </ul>
  </div>
</template>

<style>
.glass {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
