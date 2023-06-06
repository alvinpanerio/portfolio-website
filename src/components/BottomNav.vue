<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const hasScrolled = ref(true);
const scrollWhite = ref(false);
const scrollBlack = ref(false);
const projectsCircle = ref(false);
const aboutCircle = ref(false);
const contactCircle = ref(false);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  hasScrolled.value = scrollTop < 230;
  scrollWhite.value = (scrollTop > 230 && scrollTop < 5060) || scrollTop > 6300;
  scrollBlack.value = scrollTop > 5060 && scrollTop < 6300;

  projectsCircle.value = scrollTop > 230 && scrollTop < 5060;
  contactCircle.value = scrollTop > 6300;
  aboutCircle.value = scrollTop > 5060 && scrollTop < 6300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- normal nav -->
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
  <!-- scroll white -->
  <div
    class="fixed left-0 bottom-0 px-14 py-20"
    :class="{ hidden: !scrollWhite }"
  >
    <ul
      class="font-inter text-sm font-semibold flex flex-col gap-24 uppercase text-[--white]"
      v-motion-slide-visible-left
    >
      <li class="flex gap-5 items-center">
        <div class="w-10 h-10 rounded-full bg-[--white] relative">
          <div
            class="bg-[--black] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !projectsCircle }"
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
            :class="{ hidden: !aboutCircle }"
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
        <div class="w-10 h-10 rounded-full bg-[--white] relative">
          <div
            class="bg-[--black] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !contactCircle }"
          ></div>
        </div>
        <a
          href="#contact"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Contact</a
        >
      </li>
    </ul>
  </div>
  <!-- scroll black -->
  <div
    class="fixed left-0 bottom-0 px-14 py-20"
    :class="{ hidden: !scrollBlack }"
  >
    <ul
      class="font-inter text-sm font-semibold flex flex-col gap-24 uppercase text-[--black]"
      v-motion-slide-visible-left
    >
      <li class="flex gap-5 items-center">
        <div class="w-10 h-10 rounded-full bg-[--black] relative">
          <div
            class="bg-[--white] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !projectsCircle }"
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
            :class="{ hidden: !aboutCircle }"
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
        <div class="w-10 h-10 rounded-full bg-[--black] relative">
          <div
            class="bg-[--black] h-5 w-5 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !contactCircle }"
          ></div>
        </div>
        <a
          href="#contact"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Contact</a
        >
      </li>
    </ul>
  </div>
</template>
