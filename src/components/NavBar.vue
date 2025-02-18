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
    <div class="flex items-center w-1/2 justify-around">
      <h1 class="w-20 font-bold text-xl">abelton</h1>
      <ul class="flex justify-evenly w-9/12">
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
    <div class="flex items-center justify-around w-[28%]">
      <a href="#" class="text-lg font-bold text-blue-800">Try Live 12 for free</a
      ><a href="#">Log in or register</a>
    </div>
  </nav>
  <section v-show="showBool" :class="['h-72 grid content-evenly ', { 'border-b-[3px]': showBool }]">
    <div class="w-11/12">
      <h1 class="font-semibold text-2xl text-center w-fit ml-7 mb-4">More on Ableton.com:</h1>
      <ul class="flex justify-around text-left">
        <li class="list-none cursor-pointer">Blog</li>
        <li class="list-none cursor-pointer">Ableton for the Classroom</li>
        <li class="list-none cursor-pointer">Ableton for Colleges and Universities</li>
        <li class="list-none cursor-pointer">Certified Training</li>
        <li class="list-none cursor-pointer">About Ableton</li>
        <li class="list-none cursor-pointer">Jobs</li>
        <li class="list-none cursor-pointer">Apprenticeships</li>
      </ul>
    </div>
    <div>
      <h1 class="font-semibold text-2xl text-center w-fit ml-7 mb-4">More on Ableton.com:</h1>
      <div class="flex justify-around">
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
