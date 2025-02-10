<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <main class="h-fit grid gap-y-16">
    <div
      class="h-[530px] w-[930px] left-0 right-0 mx-auto flex justify-center items-center text-[5.3rem] text-orange-700 font-extrabold font-['Atkinson Hyperlegible Next', serif]"
      style="
        background-image: url('https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg');
        background-size: cover;
      "
    >
      Ableton
    </div>
    <div class="w-[48%] mx-auto grid gap-y-7">
      <h2 class="text-3xl font-semibold font-['Atkinson Hyperlegible Next', serif]">
        We make <a class="text-blue-900" href="#">Live</a>,
        <a class="text-blue-900" href="#">Push</a>, <a class="text-blue-900" href="#">Note</a>,
        <a class="text-blue-900" href="#">Move</a>
        and <a class="text-blue-900" href="#">Link</a> — unique software and hardware for music
        creation and performance. With these products, our community of users creates amazing
        things.
      </h2>
      <p>
        Ableton was founded in 1999 and released the first version of Live in 2001. Our products are
        used by a community of dedicated musicians, sound designers, and artists from across the
        world.
      </p>
    </div>
  </main>
</template>
