<script setup>
import { computed, ref } from 'vue'

const showBool = ref(false)
</script>

<template>
  <nav
    :class="[
      'w-screen h-20 flex items-center justify-between font-[Atkinson Hyperlegible Next, serif]',
      { 'border-b-[3px]': !showBool },
    ]"
  >
    <div class="flex items-center w-1/2 max-md:w-screen justify-around">
      <h1 class="w-20 font-bold text-xl">abelton</h1>
      <div @click="() => (showBool = !showBool)" class="md:hidden">
        menu<i :class="['bx bx-chevron-down', { 'rotate-180': showBool }]"></i>
      </div>
      <!-- this is temporary -->
      <ul class="flex max-md:hidden justify-evenly w-9/12">
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Live</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Push</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Move</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Note</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Link</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Shop</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Packs</li>
        <li class="cursor-pointer font-semibold list-none p-0 m-0">Help</li>
        <li
          class="cursor-pointer font-semibold list-none p-0 m-0 text-orange-600"
          @click="() => (showBool = !showBool)"
        >
          More<i v-show="showBool === false" class="bx bx-plus" style="color: #ea580c"></i
          ><i v-show="showBool" class="bx bx-minus" style="color: #ea580c"></i>
        </li>
      </ul>
    </div>
    <div class="flex max-md:hidden items-center justify-around w-[28%]">
      <a href="#" class="text-lg font-bold text-blue-800">Try Live 12 for free</a
      ><a href="#">Log in or register</a>
    </div>
  </nav>
  <section
    v-show="showBool"
    :class="[
      'h-72 max-md:h-[105vh] max-md:bg-blue-800 max-md:text-white max-md:w-screen max-md:overflow-x-hidden grid md:content-evenly ',
      { 'border-b-[3px]': showBool },
    ]"
  >
    <ul class="grid md:hidden w-9/12 mb-4">
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Live</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Push</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Move</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Note</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Link</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Shop</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Packs</li>
      <li class="p-0 cursor-pointer font-semibold list-none m-0">Help</li>
      <a href="#" class="text-lg font-bold text-white">Try Live 12 for free</a
      ><a href="#">Log in or register</a>
    </ul>
    <div class="w-11/12">
      <h1 class="font-semibold text-2xl text-center w-fit ml-7 mb-4">More on Ableton.com:</h1>
      <ul class="md:flex justify-around text-left max-md:h-[20vh]">
        <li class="list-none cursor-pointer max-md:mb-1">Blog</li>
        <li class="list-none cursor-pointer max-md:mb-1">Ableton for the Classroom</li>
        <li class="list-none cursor-pointer max-md:mb-1">Ableton for Colleges and Universities</li>
        <li class="list-none cursor-pointer max-md:mb-1">Certified Training</li>
        <li class="list-none cursor-pointer max-md:mb-1">About Ableton</li>
        <li class="list-none cursor-pointer max-md:mb-1">Jobs</li>
        <li class="list-none cursor-pointer max-md:mb-1">Apprenticeships</li>
      </ul>
    </div>
    <h1 class="font-semibold text-2xl text-center w-fit ml-7 mb-4 max-md:-mb-10">
      More on Ableton.com:
    </h1>
    <div
      class="flex max-md:justify-between max-md:overflow-x-scroll max-md:w-[135%] max-md:text-sm"
    >
      <div class="flex">
        <div class="w-72 cursor-pointer">
          <h1 class="font-semibold">Loop</h1>
          <p>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
        </div>
        <div class="w-72 cursor-pointer">
          <h1 class="font-semibold">Learning Music</h1>
          <p>Learn the fundamentals of music making right in your browser.</p>
        </div>
        <div class="w-72 cursor-pointer">
          <h1 class="font-semibold">Learning synths</h1>
          <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
        </div>
        <div class="w-72 cursor-pointer">
          <h1 class="font-semibold">Making Music</h1>
          <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
        </div>
      </div>
    </div>
  </section>
</template>
