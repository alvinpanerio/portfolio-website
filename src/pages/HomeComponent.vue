<script>
import sb from "@/assets/projects/sb.png";
import luna from "@/assets/projects/luna.png";
import eg from "@/assets/projects/eg.png";
import lca from "@/assets/projects/lca.png";
import wyw from "@/assets/projects/wyw.png";
import ss from "@/assets/projects/ss.jpg";
import rtd from "@/assets/projects/rtd.jpg";

import revolver from "@/assets/projects/secondary/revolver.jpg";
import donut from "@/assets/projects/secondary/donut.jpg";
import tank from "@/assets/projects/secondary/tank.png";
import poster from "@/assets/projects/secondary/poster.jpg";
import paulwitda45 from "@/assets/projects/secondary/paul-wit-da-45.jpg";
import unplanned from "@/assets/projects/secondary/unplanned.jpg";
import screamin from "@/assets/projects/secondary/screamin.jpg";
import facebook from "@/assets/projects/secondary/facebook.png";
import ukiyo from "@/assets/projects/secondary/ukiyo.png";

import reactjs from "@/assets/stacks/reactjs.svg";
import nodejs from "@/assets/stacks/nodejs.svg";
import mongodb from "@/assets/stacks/mongodb.svg";
import firebase from "@/assets/stacks/firebase.svg";
import bootstrap from "@/assets/stacks/bootstrap.svg";
import tailwind from "@/assets/stacks/tailwind.svg";
import sass from "@/assets/stacks/sass.svg";
import jquery from "@/assets/stacks/jquery.svg";
import git from "@/assets/stacks/git.svg";
import figma from "@/assets/stacks/figma.svg";
import linux from "@/assets/stacks/linux.svg";
import unity from "@/assets/stacks/unity.svg";

export default {
  data() {
    return {
      projects: {
        primary: [
          {
            id: 1,
            name: "Supreme Beats",
            img: sb,
            web: {
              hasLink: true,
              link: "https://supremebeats.netlify.app",
            },
            github: {
              hasLink: false,
            },
          },
          {
            id: 2,
            name: "Luna Cosmetics",
            img: luna,
            web: {
              hasLink: true,
              link: "http://lunacosmetics.me",
            },
            github: {
              hasLink: false,
            },
          },
          {
            id: 3,
            name: "Eye G",
            img: eg,
            web: {
              hasLink: true,
              link: "http://dev-eyeg.pantheonsite.io",
            },
            github: {
              hasLink: false,
            },
          },
          {
            id: 4,
            name: "Listing App",
            img: lca,
            web: {
              hasLink: false,
            },
            github: {
              hasLink: true,
              link: "https://github.com/alvinpanerio/listing-crud-app",
            },
          },
          {
            id: 5,
            name: "Work Your Way",
            img: wyw,
            web: {
              hasLink: true,
              link: "https://workyourway.vercel.app",
            },
            github: {
              hasLink: true,
              link: "https://github.com/alvinpanerio/work-your-way",
            },
          },
          {
            id: 6,
            name: "Suntukan Simulator",
            img: ss,
            web: {
              hasLink: true,
              link: "https://drive.google.com/file/d/1fYMTAk1MaEVgtgoI1mUrMBu5dHgeaoL0/view",
            },
            github: {
              hasLink: true,
              link: "https://github.com/alvinpanerio/suntukan-simulator",
            },
          },
          {
            id: 7,
            name: "Rebolusyonaryo TD",
            img: rtd,
            web: {
              hasLink: true,
              link: "https://supremospace.itch.io/rebolusyonaryo-td",
            },
            github: {
              hasLink: true,
              link: "https://github.com/supremo-space/rebolusyonaryo-td",
            },
          },
          {
            id: 8,
            name: "Codewars Challenges",
            img: "https://www.codewars.com/users/tyrooon/badges/large",
            web: {
              hasLink: true,
              link: "https://www.codewars.com/users/tyrooon",
            },
            github: {
              hasLink: false,
            },
          },
        ],
        secondary: [
          {
            id: 1,
            name: "Revolver",
            img: revolver,
            web: {
              hasLink: false,
            },
            artstation: {
              hasLink: true,
              link: "https://www.artstation.com/artwork/Ze5NXG",
            },
          },
          {
            id: 2,
            name: "Donut",
            img: donut,
            web: {
              hasLink: false,
            },
            artstation: {
              hasLink: true,
              link: "https://www.artstation.com/artwork/mDx3qd",
            },
          },
          {
            id: 3,
            name: "Tank",
            img: tank,
            web: {
              hasLink: true,
              link: "https://freeimage.host/i/H4vu7gS",
            },
            artstation: {
              hasLink: false,
            },
          },
          {
            id: 4,
            name: "Tell 'em x Bawal Concert Poster",
            img: poster,
            web: {
              hasLink: true,
              link: "https://freeimage.host/i/H4vu512",
            },
            artstation: {
              hasLink: false,
            },
          },
          {
            id: 5,
            name: "Paul wit da 45 Album Art",
            img: paulwitda45,
            web: {
              hasLink: true,
              link: "https://freeimage.host/i/H4vuad7",
            },
            artstation: {
              hasLink: false,
            },
          },
          {
            id: 6,
            name: "Unplanned Album Art",
            img: unplanned,
            web: {
              hasLink: true,
              link: "https://freeimage.host/i/H4vulee",
            },
            artstation: {
              hasLink: false,
            },
          },
          {
            id: 7,
            name: "Screamin' Album Art",
            img: screamin,
            web: {
              hasLink: true,
              link: "https://freeimage.host/i/H4vuRql",
            },
            artstation: {
              hasLink: false,
            },
          },
          {
            id: 8,
            name: "Facebook (Criticism) Magazine",
            img: facebook,
            web: {
              hasLink: true,
              link: "https://pdfhost.io/v/vN7MbG8JZ_facebookcrtiticism",
            },
            artstation: {
              hasLink: false,
            },
          },
          {
            id: 9,
            name: "Ukiyo Logo",
            img: ukiyo,
            web: {
              hasLink: true,
              link: "https://freeimage.host/i/H4vuc79",
            },
            artstation: {
              hasLink: false,
            },
          },
        ],
      },
      stacks: [
        {
          id: 1,
          img: reactjs,
        },
        {
          id: 2,
          img: nodejs,
        },
        {
          id: 3,
          img: mongodb,
        },
        {
          id: 4,
          img: firebase,
        },
        {
          id: 5,
          img: bootstrap,
        },
        {
          id: 6,
          img: tailwind,
        },
        {
          id: 7,
          img: sass,
        },
        {
          id: 8,
          img: jquery,
        },
        {
          id: 9,
          img: git,
        },
        {
          id: 10,
          img: figma,
        },
        {
          id: 11,
          img: linux,
        },
        {
          id: 12,
          img: unity,
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
      class="w-1/2 bg-[--white] h-full flex justify-center items-start flex-col bg-noise-white"
    >
      <div class="-mt-12 ml-10">
        <p class="2xl:text-xl text-lg font-akira 2xl:pb-8 pb-4 text-[--black]">
          Aspiring Full-Stack Developer <v-icon icon="fas fa-home" />
        </p>
        <p
          class="2xl:text-6xl text-4xl font-akira text-[--black] 2xl:pb-8 pb-4"
        >
          Hi, I'm Alvin Panerio
        </p>
        <div class="flex gap-5">
          <a
            href="https://github.com/alvinpanerio"
            target="_blank"
            class="2xl:text-base text-xs items-center flex gap-3 mb-8 text-[--black] font-akira border border-4 border-[--black] p-2 hover:bg-[--black] hover:text-[--white] transition-all duration-300"
          >
            Visit Github
            <unicon
              name="github"
              fill="black"
              hover="white"
              class="2xl:w-6 w-4 2xl:h-6 h-4"
            ></unicon>
          </a>
          <a
            href="https://pdfhost.io/v/n0DJ1TjBG_alvinpanerioresume"
            target="_blank"
            class="2xl:text-base text-xs flex gap-3 mb-8 text-[--black] font-akira border border-4 border-[--black] p-2 hover:bg-[--black] hover:text-[--white] transition-all duration-300"
          >
            View Resume
            <unicon
              name="file-alt"
              fill="black"
              hover="white"
              class="2xl:w-6 w-4 2xl:h-6 h-4"
            ></unicon>
          </a>
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
    class="w-full h-max flex bg-[--black] bg-noise-black flex flex-col 2xl:px-96 px-56"
  >
    <p class="text-[--white] font-akira 2xl:text-9xl text-8xl 2xl:mt-20 mt-14">
      Projects
    </p>
    <div class="w-full">
      <p
        class="text-[--white] font-akira 2xl:mt-20 mt-14 2xl:text-base text-sm"
      >
        Primary Skills - Web Development/Game Development/Programming
      </p>
      <div class="mt-10 flex flex-wrap justify-between gap-1 mb-10">
        <div v-for="i in projects.primary" :key="i.id">
          <li
            v-if="i.id % 2 === 0"
            class="mt-10 flex flex-wrap justify-between gap-10"
          >
            <div
              class="bg-[#fdfdfd]/20 2xl:w-[545px] w-[390px] 2xl:h-[250px] h-[205px] flex justify-center items-center relative"
            >
              <p
                class="2xl:text-base text-xs absolute text-[--white] top-2 right-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="2xl:h-[200px] h-[155px] projects-img-even transition-all duration-700"
              />
              <div
                v-if="i.github || i.web"
                className="absolute bottom-5 left-5 text-2xl"
              >
                <div className="flex flex-col items-center gap-3 ">
                  <a
                    v-if="i.web.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.web.link"
                    target="_blank"
                  >
                    <font-awesome-icon icon="link" />
                  </a>
                  <a
                    v-if="i.github.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.github.link"
                    target="_blank"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li v-else class="mt-10 flex flex-wrap justify-between gap-10">
            <div
              class="bg-[#fdfdfd]/20 2xl:w-[545px] w-[390px] 2xl:h-[250px] h-[205px] flex justify-center items-center relative"
            >
              <p
                class="2xl:text-base text-xs absolute text-[--white] top-2 left-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="2xl:h-[200px] h-[155px] projects-img-odd transition-all duration-700"
              />
              <div
                v-if="i.github || i.web"
                className="absolute bottom-5 right-5 text-2xl"
              >
                <div className="flex flex-col items-center gap-3 ">
                  <a
                    v-if="i.web.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.web.link"
                    target="_blank"
                  >
                    <font-awesome-icon icon="link" />
                  </a>
                  <a
                    v-if="i.github.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.github.link"
                    target="_blank"
                  >
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="w-full">
      <p class="text-[--white] font-akira 2xl:mt-20 mt-14">
        Secondary Skills - Graphic Design/3D Modelling
      </p>
      <div class="mt-10 flex flex-wrap justify-between gap-2 mb-10">
        <div v-for="i in projects.secondary" :key="i.id">
          <li
            v-if="i.id % 2 === 0"
            class="mt-10 flex flex-wrap justify-between gap-10"
          >
            <div
              class="bg-[#fdfdfd]/20 2xl:w-[545px] w-[390px] 2xl:h-[250px] h-[205px] flex justify-center items-center relative"
            >
              <p
                class="2xl:text-base text-xs absolute text-[--white] top-2 right-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="2xl:h-[200px] h-[155px] projects-img-even transition-all duration-700"
              />

              <div
                v-if="i.artstation || i.web"
                className="absolute bottom-5 left-5 text-2xl"
              >
                <div className="flex flex-col items-center gap-3 ">
                  <a
                    v-if="i.web.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.web.link"
                    target="_blank"
                  >
                    <font-awesome-icon icon="link" />
                  </a>
                  <a
                    v-if="i.artstation.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.artstation.link"
                    target="_blank"
                  >
                    <font-awesome-icon :icon="['fab', 'artstation']" />
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li v-else class="mt-10 flex flex-wrap justify-between gap-10">
            <div
              class="bg-[#fdfdfd]/20 2xl:w-[545px] w-[390px] 2xl:h-[250px] h-[205px] flex justify-center items-center relative"
            >
              <p
                class="2xl:text-base text-xs absolute text-[--white] top-2 left-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="2xl:h-[200px] h-[155px] projects-img-odd transition-all duration-700"
              />
              <div
                v-if="i.artstation || i.web"
                className="absolute bottom-5 right-5 text-2xl"
              >
                <div className="flex flex-col items-center gap-3 ">
                  <a
                    v-if="i.web.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.web.link"
                    target="_blank"
                  >
                    <font-awesome-icon icon="link" />
                  </a>
                  <a
                    v-if="i.artstation.hasLink"
                    className="text-white hover:text-[--gray] transition-all duration-300 cursor-pointer"
                    :href="i.artstation.link"
                    target="_blank"
                  >
                    <font-awesome-icon :icon="['fab', 'artstation']" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="w-full">
      <p class="text-[--white] font-akira 2xl:mt-20 mt-14">
        Filler Skills - Sketching/Painting/Digital Art/Beatmaking
      </p>
      <div class="mt-10 flex flex-wrap justify-between gap-2 mb-10">
        <div v-for="i in projects.secondary" :key="i.id">
          <li
            v-if="i.id % 2 === 0"
            class="mt-10 flex flex-wrap justify-between gap-10"
          >
            <div
              class="bg-[#fdfdfd]/20 2xl:w-[545px] w-[390px] 2xl:h-[250px] h-[205px] flex justify-center items-center relative"
            >
              <p
                class="2xl:text-base text-xs absolute text-[--white] top-2 right-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="2xl:h-[200px] h-[155px] projects-img-even transition-all duration-700"
              />
            </div>
          </li>

          <li v-else class="mt-10 flex flex-wrap justify-between gap-10">
            <div
              class="bg-[#fdfdfd]/20 2xl:w-[545px] w-[390px] 2xl:h-[250px] h-[205px] flex justify-center items-center relative"
            >
              <p
                class="2xl:text-base text-xs absolute text-[--white] top-2 left-2 font-akira bg-[--black] p-2 z-20"
              >
                {{ i.name }}
              </p>
              <img
                :src="i.img"
                alt=""
                class="2xl:h-[200px] h-[155px] projects-img-odd transition-all duration-700"
              />
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
  <div
    id="about"
    class="w-full 2xl:h-screen 2xl:pb-0 pb-14 flex bg-[--white] bg-noise-white flex flex-col 2xl:px-96 px-56"
  >
    <p class="text-[--black] font-akira 2xl:text-9xl text-8xl 2xl:mt-20 mt-14">
      About
    </p>
    <div>
      <p class="font-akira 2xl:text-2xl text-xl mt-5">
        Hi, I'm an aspiring full-stack developer with experience building static
        and dynamic sites using modern web stacks.
      </p>
      <div class="flex gap-10">
        <div class="w-1/2 h-max">
          <p class="font-akira 2xl:text-lg text-base 2xl:mt-12 mt-8">
            Techonology Stacks
          </p>
          <div class="flex gap-5">
            <div class="flex flex-wrap mt-5">
              <div v-for="i in stacks" v-bind:key="i.id">
                <img :src="i.img" alt="" class="w-[5.7rem] h-[5.7rem]" />
              </div>
            </div>
          </div>
          <div>
            <p class="font-akira 2xl:text-lg text-base mt-8 mb-5">
              Other Links
            </p>
            <div class="flex flex-col gap-5">
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  href="https://facebook.com/alvin.panerio.9"
                  class="text-[--black] 2xl:text-lg text-base font-bold"
                  target="_blank"
                >
                  Facebook
                </a>
                <p class="text-[--black] 2xl:text-lg text-base">→</p>
              </div>
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  href="https://github.com/alvinpanerio"
                  class="text-[--black] 2xl:text-lg text-base font-bold"
                  target="_blank"
                >
                  Github
                </a>
                <p class="text-[--black] 2xl:text-lg text-base">→</p>
              </div>
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  href="https://linkedin.com/in/alvinpanerio"
                  class="text-[--black] 2xl:text-lg text-base font-bold"
                  target="_blank"
                >
                  Linkedin
                </a>
                <p class="text-[--black] 2xl:text-lg text-base">→</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-max">
          <p class="font-akira 2xl:text-lg text-base 2xl:mt-12 mt-8">
            Certifications
          </p>
          <div class="flex flex-wrap mt-8 gap-3">
            <div
              v-for="i in certifications"
              v-bind:key="i.id"
              class="bg-[--black] w-4/5 h-max rounded-xl p-5 font-inter"
            >
              <p class="text-[--white] 2xl:text-base text-sm">{{ i.name }}</p>
              <p class="text-[--gray] mt-2 mb-1 2xl:text-base text-sm">
                {{ i.org }}
              </p>
              <div
                class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
              >
                <a
                  :href="i.link"
                  class="text-[--white] 2xl:text-sm text-xs font-semibold"
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
    class="w-full 2xl:h-screen 2xl:pb-0 pb-14 flex bg-[--black] bg-noise-black flex flex-col 2xl:px-96 px-56"
  >
    <p class="text-[--white] font-akira 2xl:text-9xl text-8xl 2xl:mt-20 mt-14">
      Contact
    </p>
    <div>
      <p class="font-akira 2xl:text-2xl text-xl mt-5 text-[--white]">
        Let's start building a project together!
      </p>
      <div class="flex gap-3">
        <div class="font-inter 2xl:mt-14 mt-10 w-1/2 text-[--white]">
          <div class="flex gap-10 border-y-2 border-gray-400 py-5">
            <p class="text-gray-400 2xl:text-sm text-xs">01</p>
            <div class="flex flex-col gap-5">
              <p class="text-[--white] 2xl:text-lg text-base">
                What's your name?
              </p>
              <input
                type="text"
                class="bg-transparent focus:outline-none text-[--white] placeholder-gray-400 2xl:text-lg text-base"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div class="flex gap-10 border-b-2 border-gray-400 py-5">
            <p class="text-gray-400 2xl:text-sm text-xs">02</p>
            <div class="flex flex-col gap-5">
              <p class="text-[--white] 2xl:text-lg text-base">
                What's your email?
              </p>
              <input
                type="email"
                class="bg-transparent focus:outline-none text-[--white] placeholder-gray-400 2xl:text-lg text-base"
                placeholder="johndoe@domain.com"
              />
            </div>
          </div>
          <div class="flex gap-10 border-gray-400 py-5">
            <p class="text-gray-400 2xl:text-sm text-xs">03</p>
            <div class="flex flex-col gap-5 w-full">
              <p class="text-[--white] 2xl:text-lg text-base">Your Message</p>
              <textarea
                type="text"
                class="bg-transparent focus:outline-none text-[--white] placeholder-gray-400 2xl:text-lg text-base h-[150px] resize-none"
                placeholder="Aa..."
              ></textarea>
            </div>
          </div>
          <div class="w-full flex gap-10 items-center">
            <p class="w-full h-[2px] bg-gray-400"></p>
            <button
              class="2xl:text-base text-xs items-center flex gap-3 text-[--white] font-akira border border-4 border-[--white] p-2 hover:bg-[--white] hover:text-[--black] transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </div>
        <div
          class="2xl:mt-11 mt-8 w-1/2 pl-24 text-[--white] flex flex-col gap-3"
        >
          <div class="font-inter flex flex-col gap-2">
            <p class="font-akira mb-2 2xl:text-lg text-base">Contact Details</p>
            <p class="2xl:text-base text-sm">alvinedoyagapanerio@gmail.com</p>
            <p class="2xl:text-base text-sm">+63 9511399954</p>
            <p class="2xl:text-base text-sm">
              Valenzuela City, Metro Manila, PH
            </p>
          </div>
          <p class="font-akira 2xl:text-lg text-base mt-8 mb-2">Other Links</p>
          <div class="flex flex-col gap-3">
            <div
              class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
            >
              <a
                href="https://facebook.com/alvin.panerio.9"
                class="text-[--white] 2xl:text-lg text-base font-bold"
                target="_blank"
              >
                Facebook
              </a>
              <p class="text-[--white] 2xl:text-lg text-base">→</p>
            </div>
            <div
              class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
            >
              <a
                href="https://github.com/alvinpanerio"
                class="text-[--white] 2xl:text-lg text-base font-bold"
                target="_blank"
              >
                Github
              </a>
              <p class="text-[--white] 2xl:text-lg text-base">→</p>
            </div>
            <div
              class="flex gap-3 items-center hover:gap-6 transition-all duration-300"
            >
              <a
                href="https://linkedin.com/in/alvinpanerio"
                class="text-[--white] 2xl:text-lg text-base font-bold"
                target="_blank"
              >
                Linkedin
              </a>
              <p class="text-[--white] 2xl:text-lg text-base">→</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
