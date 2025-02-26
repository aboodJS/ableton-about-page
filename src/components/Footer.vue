<template>
  <footer
    class="h-screen max-md:h-[125vh] border-t-2 grid justify-center content-evenly max-md:content-start w-full max-md:w-fit"
  >
    <main class="grid w-[85%]">
      <h1 class="text-[45px] h-fit">Ableton</h1>
    </main>
    <section
      class="grid md:grid-cols-3 md:grid-rows-2 md:w-[90vw] w-fit justify-evenly content-between gap-y-8"
    >
      <ul class="md:text-lg text-xs">
        <li>Register Live, Push or Move<i class="bx bx-chevron-right"></i></li>
        <li>About Ableton<i class="bx bx-chevron-right"></i></li>
        <li>Jobs<i class="bx bx-chevron-right"></i></li>
        <li class="text-3xl">
          <i class="bx bxl-facebook-circle" style="color: #6056d4"></i>
          <i class="bx bxl-twitter" style="color: #5245e4"></i>
          <i class="bx bxl-youtube" style="color: #e6222d"></i
          ><i class="bx bxl-instagram" style="color: #3438af"></i>
          <i class="bx bxl-tiktok" style="color: #19191a"></i>
          <i class="bx bxl-discord-alt" style="color: #1b1bd2"></i>
        </li>
      </ul>
      <ul class="text-xs md:text-base">
        <li class="font-semibold sm:text-xs">Education</li>
        <li>Offers for students and teachers<i class="bx bx-chevron-right"></i></li>
        <li>Ableton for the Classroom<i class="bx bx-chevron-right"></i></li>
        <li>Ableton for Colleges and Universities<i class="bx bx-chevron-right"></i></li>
      </ul>
      <ul class="max-md:text-xs text-base">
        <li class="font-semibold">Sign up to our newsletter</li>
        <li>
          Enter your email address to stay up to date with the latest offers, tutorials, downloads,
          surveys and more.
        </li>

        <input class="bg-gray-300 w-[12rem] h-8" type="email" name="" id="" /><button
          class="bg-blue-800 h-8 w-20 text-white"
        >
          Sign Up
        </button>
      </ul>
      <ul class="md:text-base text-xs">
        <li class="font-semibold">Community</li>
        <li>Find Ableton User Groups<i class="bx bx-chevron-right"></i></li>
        <li>Find Certified Training<i class="bx bx-chevron-right"></i></li>
        <li>Become a Certified Trainer<i class="bx bx-chevron-right"></i></li>
      </ul>
      <div class="scale-100 max-md:scale-90 max-md:mb-5">
        <h1 class="font-semibold">Language and Location</h1>
        <select name="language" id="" class="w-28">
          <option value="English">English</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Francais">Francais</option>
          <option value="Espanol">Espanol</option>
          <option value="العربية">العربية</option>
        </select>
        <select name="Country" id="" class="ml-1 w-44">
          <option value="Country">Country</option>
          <option value="Country">Country</option>
          <option value="Country">Country</option>
          <option value="Country">Country</option>
          <option value="Country">Country</option>
        </select>
      </div>
    </section>
    <div class="flex max-md:grid justify-between :w-[95vw]">
      <ul class="flex max-md:grid justify-evenly content-between w-3/5 font-semibold text-sm">
        <li>Contact Us</li>
        <li>Press Resources</li>
        <li>Legal Info</li>
        <li>Corporate Information</li>
        <li>Privacy Policy</li>
        <li>Cookie Settings</li>
        <li>Imprint</li>
      </ul>
      <h1 class="font-semibold text-sm">made in Berlin</h1>
    </div>
  </footer>
</template>
