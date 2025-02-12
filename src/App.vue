<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar></NavBar>
  <main class="h-fit grid gap-y-32">
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
    <div class="flex justify-evenly items-center my-36">
      <img
        src="https://images.pexels.com/photos/5657671/pexels-photo-5657671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        class="h-[465px] w-[465px] z-10"
      />
      <img
        src="https://images.pexels.com/photos/2847098/pexels-photo-2847098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        class="w-[370px] h-[278px] outline-[260px] outline outline-yellow-200"
      />
    </div>
    <div class="w-[48%] mx-auto grid gap-y-7">
      <h2 class="text-3xl font-semibold font-['Atkinson Hyperlegible Next', serif]">
        We believe it takes focus to create truly outstanding instruments. We only work on a few
        products and we strive to make them great.
      </h2>
      <p>
        Rather than having a one-size-fits-all process, we try to give our people what they need to
        work their magic and grow. We’ve learned that achieving the best results comes from building
        teams that are richly diverse, and thus able to explore problems from a wider set of
        perspectives. We don’t always agree with each other, but opinion and debate are valued and
        openly encouraged.
      </p>
    </div>
    <img
      src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      class="w-[920px] h-[520px] justify-self-center"
    />
    <div class="w-[48%] mx-auto grid gap-y-7">
      <h2 class="text-3xl font-semibold font-['Atkinson Hyperlegible Next', serif]">
        We believe it takes focus to create truly outstanding instruments. We only work on a few
        products and we strive to make them great.
      </h2>
      <p>
        <p>
          We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
        </p>
        <p>
          Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
        </p>
      </p>
    </div>
    <div class="flex items-center justify-evenly relative h-fit">
      <div class="h-[650px] w-[740px] bg-pink-500"></div>
      <div class="flex justify-around w-[110%] items-center absolute left-8">
        <img class="w-[371px] h-[280px]" src="https://images.pexels.com/photos/7092351/pexels-photo-7092351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
      <img class="w-[464px] h-[464px]" src="https://images.pexels.com/photos/5756744/pexels-photo-5756744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
    </div>
  </main>
</template>
