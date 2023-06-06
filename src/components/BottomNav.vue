<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const hasScrolled = ref(true);
const scrollWhite = ref(false);
const scrollBlack = ref(false);
const projectsCircle = ref(false);
const aboutCircle = ref(false);
const contactCircle = ref(false);

const screenWidth = ref(
  window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
);

const handleScroll = () => {
  console.log(screenWidth.value);

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (screenWidth.value >= 1920 && screenWidth.value < 1366) {
    hasScrolled.value = scrollTop < 230;
    scrollWhite.value =
      (scrollTop > 230 && scrollTop < 5060) || scrollTop > 6300;
    scrollBlack.value = scrollTop > 5060 && scrollTop < 6300;

    projectsCircle.value = scrollTop > 230 && scrollTop < 5060;
    contactCircle.value = scrollTop > 6300;
    aboutCircle.value = scrollTop > 5060 && scrollTop < 6300;
  } else if (screenWidth.value >= 1366) {
    console.log(scrollTop);
    hasScrolled.value = scrollTop < 230;
    scrollWhite.value =
      (scrollTop > 230 && scrollTop < 4170) || scrollTop > 5100;
    scrollBlack.value = scrollTop > 4170 && scrollTop < 5100;

    projectsCircle.value = scrollTop > 230 && scrollTop < 4170;
    contactCircle.value = scrollTop > 5100;
    aboutCircle.value = scrollTop > 4170 && scrollTop < 5100;
  }
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
    class="fixed left-0 bottom-0 px-14 2xl:py-20 py-10"
    :class="{ hidden: !hasScrolled }"
  >
    <ul
      class="font-inter 2xl:text-sm text-xs font-semibold flex flex-col gap-3 uppercase text-[--black] list-disc"
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
    class="fixed left-0 bottom-0 px-14 2xl:py-20 py-10"
    :class="{ hidden: !scrollWhite }"
  >
    <ul
      class="font-inter 2xl:text-sm text-xs font-semibold flex flex-col 2xl:gap-24 gap-12 uppercase text-[--white]"
      v-motion-slide-visible-left
    >
      <li class="flex gap-5 items-center">
        <div
          class="2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-[--white] relative"
        >
          <div
            class="bg-[--black] 2xl:h-5 2xl:w-5 h-4 w-4 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !projectsCircle }"
          ></div>
          <div class="2xl:h-36 h-24 w-2 bg-[--white] m-auto"></div>
        </div>
        <a
          href="#projects"
          class="hover:pl-3 hover:font-black transition-all duration-300s"
          >Projects</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div
          class="2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-[--white] relative"
        >
          <div
            class="bg-[--black] 2xl:h-5 2xl:w-5 h-4 w-4 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !aboutCircle }"
          ></div>
          <div class="2xl:h-36 h-24 w-2 bg-[--white] m-auto"></div>
        </div>
        <a
          href="#about"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >About</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div
          class="2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-[--white] relative"
        >
          <div
            class="bg-[--black] 2xl:h-5 2xl:w-5 h-4 w-4 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
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
    class="fixed left-0 bottom-0 px-14 2xl:py-20 py-10"
    :class="{ hidden: !scrollBlack }"
  >
    <ul
      class="font-inter 2xl:text-sm text-xs font-semibold flex flex-col 2xl:gap-24 gap-12 uppercase text-[--black]"
      v-motion-slide-visible-left
    >
      <li class="flex gap-5 items-center">
        <div
          class="2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-[--black] relative"
        >
          <div
            class="bg-[--white] 2xl:h-5 2xl:w-5 h-4 w-4 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !projectsCircle }"
          ></div>
          <div class="2xl:h-36 h-24 w-2 bg-[--black] m-auto"></div>
        </div>
        <a
          href="#projects"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >Projects</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div
          class="2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-[--black] relative"
        >
          <div
            class="bg-[--white] 2xl:h-5 2xl:w-5 h-4 w-4 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
            :class="{ hidden: !aboutCircle }"
          ></div>
          <div class="2xl:h-36 h-24 w-2 bg-[--black] m-auto"></div>
        </div>
        <a
          href="#about"
          class="hover:pl-3 hover:font-black transition-all duration-300"
          >About</a
        >
      </li>
      <li class="flex gap-5 items-center">
        <div
          class="2xl:w-10 2xl:h-10 w-8 h-8 rounded-full bg-[--black] relative"
        >
          <div
            class="bg-[--black] 2xl:h-5 2xl:w-5 h-4 w-4 rounded-full z-20 m-auto absolute top-[50%] translate-y-[-50%] translate-x-[50%]"
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
