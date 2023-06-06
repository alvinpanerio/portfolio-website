<script>
export default {
  data() {
    return {
      projects: {
        primary: [
          {
            id: 1,
            name: "Supreme Beats",
            img: "/src/assets/projects/sb.png",
          },
          {
            id: 2,
            name: "Luna Cosmetics",
            img: "/src/assets/projects/luna.png",
          },
          {
            id: 3,
            name: "Eye G",
            img: "/src/assets/projects/eg.png",
          },
          {
            id: 4,
            name: "Listing App",
            img: "/src/assets/projects/lca.png",
          },
          {
            id: 5,
            name: "Work Your Way",
            img: "/src/assets/projects/wyw.png",
          },
          {
            id: 6,
            name: "Suntukan Simulator",
            img: "/src/assets/projects/ss.jpg",
          },
          {
            id: 7,
            name: "Rebolusyonaryo TD",
            img: "/src/assets/projects/rtd.jpg",
          },
          {
            id: 8,
            name: "Codewars Challenges",
            img: "https://www.codewars.com/users/tyrooon/badges/large",
          },
        ],
        secondary: [
          {
            id: 1,
            name: "Revolver",
            img: "/src/assets/projects/secondary/revolver.jpg",
          },
          {
            id: 2,
            name: "Donut",
            img: "/src/assets/projects/secondary/donut.jpg",
          },
          {
            id: 3,
            name: "Tank",
            img: "/src/assets/projects/secondary/tank.png",
          },
          {
            id: 4,
            name: "Tell 'em x Bawal Concert Poster",
            img: "/src/assets/projects/secondary/poster.jpg",
          },
          {
            id: 5,
            name: "Paul wit da 45 Album Art",
            img: "/src/assets/projects/secondary/paul-wit-da-45.jpg",
          },
          {
            id: 6,
            name: "Unplanned Album Art",
            img: "/src/assets/projects/secondary/unplanned.jpg",
          },
          {
            id: 7,
            name: "Screamin' Album Art",
            img: "/src/assets/projects/secondary/screamin.jpg",
          },
          {
            id: 8,
            name: "Facebook (Criticism) Magazine",
            img: "/src/assets/projects/secondary/facebook.png",
          },
          {
            id: 9,
            name: "Ukiyo Logo",
            img: "/src/assets/projects/secondary/ukiyo.png",
          },
        ],
      },
      stacks: [
        {
          id: 1,
          img: "/src/assets/stacks/reactjs.svg",
        },
        {
          id: 2,
          img: "/src/assets/stacks/nodejs.svg",
        },
        {
          id: 3,
          img: "/src/assets/stacks/mongodb.svg",
        },
        {
          id: 4,
          img: "/src/assets/stacks/firebase.svg",
        },
        {
          id: 5,
          img: "/src/assets/stacks/bootstrap.svg",
        },
        {
          id: 6,
          img: "/src/assets/stacks/tailwind.svg",
        },
        {
          id: 7,
          img: "/src/assets/stacks/sass.svg",
        },
        {
          id: 8,
          img: "/src/assets/stacks/jquery.svg",
        },
        {
          id: 9,
          img: "/src/assets/stacks/git.svg",
        },
        {
          id: 10,
          img: "/src/assets/stacks/figma.svg",
        },
        {
          id: 11,
          img: "/src/assets/stacks/linux.svg",
        },
        {
          id: 12,
          img: "/src/assets/stacks/unity.svg",
        },
      ],
      certifications: [
        {
          id: 1,
          name: "Certified in Cybersecurity",
          org: "ISC²",
          link: "#",
        },
        {
          id: 2,
          name: "Microsoft Certified: Azure Fundamentals",
          org: "Microsoft",
          link: "https://www.credly.com/badges/b4dc6c70-0f4b-4e9f-8753-af063e5d1386/public_url",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="w-full h-screen flex" id="landing">
    <div
      class="w-1/2 bg-[--white] h-full flex justify-center items-center flex-col bg-noise-white"
    >
      <div class="-mt-12">
        <p class="text-xl font-akira pb-8 text-[--black]">
          Aspiring Full-Stack Developer
        </p>
        <p class="text-6xl font-akira text-[--black] pb-8">
          Hi, I'm Alvin Panerio
        </p>
        <div class="flex gap-5">
          <a
            href="https://github.com/alvinpanerio"
            target="_blank"
            class="flex gap-3 mb-8 text-[--black] font-akira border border-4 border-[--black] p-2 hover:bg-[--black] hover:text-[--white] transition-all duration-300"
          >
            Visit Github
            <unicon name="github" fill="black" hover="white"></unicon>
          </a>
          <button
            class="flex gap-3 mb-8 text-[--black] font-akira border border-4 border-[--black] p-2 hover:bg-[--black] hover:text-[--white] transition-all duration-300"
          >
            View Resume
            <unicon name="file-alt" fill="black" hover="white"></unicon>
          </button>
        </div>
        <!-- <p class="text-xs font-akira text-[--black] w-[400px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aliquam
          magni repellat architecto sint reiciendis fugit quo, alias officiis
          necessitatibus.
        </p> -->
      </div>
    </div>
    <div class="w-1/2 bg-[--black] h-full bg-noise-black">
      <div class="h-full flex items-center justify-center">
        <div>
          <div class="mb-5 flex gap-3 items-center">
            <div class="w-3 h-3 bg-white rounded-full"></div>
            <div class="w-3 h-3 bg-white rounded-full"></div>
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <!-- <img
            src="@/assets/pic.jpg"
            alt=""
            class="h-[500px] brightness-[.7]"
          /> -->
        </div>
        <p class="text-[--white] font-akira" style="transform: rotate(90deg)">
          Lorem Ipsum
        </p>
      </div>
    </div>
  </div>
  <div
    id="projects"
    class="w-full h-max flex bg-[--black] bg-noise-black flex flex-col px-96"
  >
    <p class="text-[--white] font-akira text-9xl mt-20">Projects</p>
    <div class="w-full">
      <p class="text-[--white] font-akira mt-20">
        Primary Skills - Web Development/Game Development/Programming
      </p>
      <div class="mt-10 flex flex-wrap justify-between gap-2 mb-10">
        <div v-for="i in projects.primary" :key="i.id">
          <li
            v-if="i.id % 2 === 0"
            class="mt-10 flex flex-wrap justify-between gap-10"
          >
            <div
              class="bg-[#fdfdfd]/20 w-[545px] h-[250px] flex justify-center items-center relative"
            >
              <p
                class="absolute text-[--white] top-2 right-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="h-[200px] projects-img-even transition-all duration-700"
              />
            </div>
          </li>

          <li v-else class="mt-10 flex flex-wrap justify-between gap-10">
            <div
              class="bg-[#fdfdfd]/20 w-[545px] h-[250px] flex justify-center items-center relative"
            >
              <p
                class="absolute text-[--white] top-2 left-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="h-[200px] projects-img-odd transition-all duration-700"
              />
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="w-full">
      <p class="text-[--white] font-akira mt-20">
        Secondary Skills - Graphic Design/3D Modelling
      </p>
      <div class="mt-10 flex flex-wrap justify-between gap-2 mb-10">
        <div v-for="i in projects.secondary" :key="i.id">
          <li
            v-if="i.id % 2 === 0"
            class="mt-10 flex flex-wrap justify-between gap-10"
          >
            <div
              class="bg-[#fdfdfd]/20 w-[545px] h-[250px] flex justify-center items-center relative"
            >
              <p
                class="absolute text-[--white] top-2 right-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="h-[200px] projects-img-even transition-all duration-700"
              />
            </div>
          </li>

          <li v-else class="mt-10 flex flex-wrap justify-between gap-10">
            <div
              class="bg-[#fdfdfd]/20 w-[545px] h-[250px] flex justify-center items-center relative"
            >
              <p
                class="absolute text-[--white] top-2 left-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="h-[200px] projects-img-odd transition-all duration-700"
              />
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="w-full">
      <p class="text-[--white] font-akira mt-20">
        Filler Skills - Sketching/Painting/Digital Art/Beatmaking
      </p>
      <div class="mt-10 flex flex-wrap justify-between gap-2 mb-10">
        <div v-for="i in projects.secondary" :key="i.id">
          <li
            v-if="i.id % 2 === 0"
            class="mt-10 flex flex-wrap justify-between gap-10"
          >
            <div
              class="bg-[#fdfdfd]/20 w-[545px] h-[250px] flex justify-center items-center relative"
            >
              <p
                class="absolute text-[--white] top-2 right-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="h-[200px] projects-img-even transition-all duration-700"
              />
            </div>
          </li>

          <li v-else class="mt-10 flex flex-wrap justify-between gap-10">
            <div
              class="bg-[#fdfdfd]/20 w-[545px] h-[250px] flex justify-center items-center relative"
            >
              <p
                class="absolute text-[--white] top-2 left-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="h-[200px] projects-img-odd transition-all duration-700"
              />
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
  <div
    id="about"
    class="w-full h-screen flex bg-[--white] bg-noise-white flex flex-col px-96"
  >
    <p class="text-[--black] font-akira text-9xl mt-20">About</p>
    <div>
      <p class="font-akira text-2xl mt-5">
        Hi, I'm an aspiring full-stack developer with experience building static
        and dynamic sites using modern web stacks.
      </p>
      <div class="flex gap-10">
        <div class="w-1/2 h-max">
          <p class="font-akira text-lg mt-12">Techonology Stacks</p>
          <div class="flex gap-5">
            <div class="flex flex-wrap mt-5">
              <div v-for="i in stacks" v-bind:key="i.id">
                <img :src="i.img" alt="" class="w-[5.7rem] h-[5.7rem]" />
              </div>
            </div>
          </div>
          <div>
            <p class="font-akira text-lg mt-8 mb-5">Other Links</p>
            <div class="flex flex-col gap-5">
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  href="#"
                  class="text-[--black] text-lg font-bold"
                  target="_blank"
                >
                  Facebook
                </a>
                <p class="text-[--black] text-lg">→</p>
              </div>
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  href="https://github.com/alvinpanerio"
                  class="text-[--black] text-lg font-bold"
                  target="_blank"
                >
                  Github
                </a>
                <p class="text-[--black] text-lg">→</p>
              </div>
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/alvinpanerio"
                  class="text-[--black] text-lg font-bold"
                  target="_blank"
                >
                  Linkedin
                </a>
                <p class="text-[--black] text-lg">→</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-max">
          <p class="font-akira text-lg mt-12">Certifications</p>
          <div class="flex flex-wrap mt-8 gap-3">
            <div
              v-for="i in certifications"
              v-bind:key="i.id"
              class="bg-[--black] w-4/5 h-max rounded-xl p-5 font-inter"
            >
              <p class="text-[--white]">{{ i.name }}</p>
              <p class="text-[--gray] mt-2 mb-1">{{ i.org }}</p>
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  :href="i.link"
                  class="text-[--white] text-sm font-semibold"
                  target="_blank"
                >
                  View Certificate
                </a>
                <p class="text-[--white]">→</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="contact"
    class="w-full h-screen flex bg-[--black] bg-noise-black flex flex-col px-96"
  >
    <p class="text-[--white] font-akira text-9xl mt-20">Contact</p>
    <div>
      <p class="font-akira text-2xl mt-5 text-[--white]">
        Let's start building a project together!
      </p>
      <div class="flex gap-3">
        <div class="font-inter mt-14 w-1/2 text-[--white]">
          <div class="flex gap-10 border-y-2 border-gray-400 py-5">
            <p class="text-gray-400 text-sm">01</p>
            <div class="flex flex-col gap-5">
              <p class="text-[--white] text-lg">What's your name?</p>
              <input
                type="text"
                class="bg-transparent focus:outline-none text-[--white] placeholder-gray-400 text-lg"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div class="flex gap-10 border-b-2 border-gray-400 py-5">
            <p class="text-gray-400 text-sm">02</p>
            <div class="flex flex-col gap-5">
              <p class="text-[--white] text-lg">What's your email?</p>
              <input
                type="email"
                class="bg-transparent focus:outline-none text-[--white] placeholder-gray-400 text-lg"
                placeholder="johndoe@domain.com"
              />
            </div>
          </div>
          <div class="flex gap-10 border-gray-400 py-5">
            <p class="text-gray-400 text-sm">03</p>
            <div class="flex flex-col gap-5 w-full">
              <p class="text-[--white] text-lg">Your Message</p>
              <textarea
                type="text"
                class="bg-transparent focus:outline-none text-[--white] placeholder-gray-400 text-lg h-[150px] resize-none"
                placeholder="Aa..."
              ></textarea>
            </div>
          </div>
          <div class="w-full flex gap-10 items-center">
            <p class="w-full h-[2px] bg-gray-400"></p>
            <button
              class="flex gap-3 text-[--white] font-akira border border-4 border-[--white] p-2 hover:bg-[--white] hover:text-[--black] transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </div>
        <div
          class="font-inter mt-11 w-1/2 pl-24 text-[--white] flex flex-col gap-3"
        >
          <p class="font-akira mb-2 text-lg">Contact Details</p>
          <p>alvinedoyagapanerio@gmail.com</p>
          <p>+63 9511399954</p>
          <p>Valenzuela City, Mertro Manila, PH</p>
        </div>
      </div>
    </div>
  </div>
</template>
