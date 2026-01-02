<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar></NavBar>
  <ul class="flex justify-evenly w-72 py-5 font-semibold">
  <li class="cursor-pointer">About</li>
  <li class="cursor-pointer">Jobs</li>
  <li class="cursor-pointer">Apprenticeships</li>
</ul>
  <main class="h-fit grid gap-y-32 mb-40">
    <div
      class="h-[530px] w-[930px] max-md:w-[90vw] max-md:text-[3rem] left-0 right-0 mx-auto flex justify-center items-center text-[5.3rem] text-orange-700 font-extrabold font-['Atkinson Hyperlegible Next', serif]"
      style="
        background-image: url('https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg');
        background-size: cover;
        background-position: center;
      "
    >
      Ableton
    </div>
    <div  class="w-[48%] max-md:w-[70vw] mx-auto max-md:justify-center grid gap-y-7">
      <h2 class="text-3xl max-md:text-base font-semibold font-['Atkinson Hyperlegible Next', serif]">
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
        class="h-[465px] w-[465px] max-md:h-[25vh] max-md:w-[25vw] z-10"
      />
      <img
        src="https://images.pexels.com/photos/2847098/pexels-photo-2847098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        class="w-[370px] h-[278px] outline-[260px] max-md:w-[50vw] max-md:h-[15vh] max-md:outline-[70px] outline outline-yellow-200"
      />
    </div>
    <div class="w-[48%] max-md:w-[70vw] mx-auto max-md:justify-center grid gap-y-7">
      <h2 class="text-3xl max-md:text-base font-semibold font-['Atkinson Hyperlegible Next', serif]">
        We believe it takes focus to create truly outstanding instruments. We only work on a few
        products and we strive to make them great.
      </h2>
      <p class="max-md:text-sm">
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
      class="w-[920px] h-[520px] max-md:h-[60vh] max-md:w-[90vw] justify-self-center"
    />
    <div class="w-[48%] max-md:w-[70vw] mx-auto max-md:justify-center grid gap-y-7">
      <h2 class="text-3xl max-md:text-base font-semibold font-['Atkinson Hyperlegible Next', serif]">
        We’re passionate about what we do, but we’re equally passionate about improving who we are.
      </h2>
      <p class="max-md:text-sm">
        <p>
          We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.        </p>
        <p>
          Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.        </p>
      </p>
    </div>
    <div class="flex items-center justify-evenly max-md:justify-between relative h-fit mx-auto ">
      <div class="h-[650px] w-[740px] bg-purple-500 max-md:h-[50vh] max-md:w-[70vw]"></div>
      <div class="flex justify-around w-[110%] items-center absolute left-8 max-md:w-[40vw] max-md:-left-4">
        <img class="w-[371px] h-[280px] max-md:h-[250px]  max-md:w-[65vw]" src="https://images.pexels.com/photos/7092351/pexels-photo-7092351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
      <img class="w-[464px] h-[464px] max-md:w-[40vw] max-md:h-[40vh]" src="https://images.pexels.com/photos/5756744/pexels-photo-5756744.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
    </div>
    <div class="w-[48%] max-md:w-[70vw] mx-auto max-md:justify-center grid gap-y-7">
      <h2 class="text-3xl max-md:text-base font-semibold font-['Atkinson Hyperlegible Next', serif]">
        We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
      </h2>
      <p class="max-md:text-sm">
        If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
      </p>
    </div>
    <div class="flex justify-center mx-auto max-md:flex-col">
      <img src="https://images.pexels.com/photos/306088/pexels-photo-306088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="md:w-[580px] md:h-[580px] max-md:w-[70vw] max-md:h-[30vh]">
      <div class="md:w-[580px] md:h-[580px] bg-[#B1C5FF] flex justify-center items-center max-md:w-[70vw] max-md:h-[30vh]">
      <div class="text-2xl font-semibold w-1/2 max-md:text-base max-md:w-3/4 grid gap-5 "><p>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</p><a href="#" class="text-blue-900 flex items-center">See Latest Jobs<i class='bx bx-chevron-right' style='color:#001e3a'></i></a></div>

      </div>

    </div>
  </main>
 <Footer></Footer>
</template>
