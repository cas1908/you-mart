<template>
  <footer
    class="bg-black w-full relative text-white flex flex-col md:h-[200px] pb-4"
  >
    <h2
      class="flex flex-col justify-center items-start pl-6 pb-10 w-1/5 sm:w-[12%] md:w-[10%] lg:w-[8%] xl:w-[7%] rounded-full relative top-6 left-4 border-[#1f1f1f] border text-5xl max-[760px]:text-3xl md:text-4xl font-bold text-[#fed74c]"
    >
      <span class="relative top-4 lg:top-3 -left-2 lg:-left-1">Y</span
      ><span
        class="text-[#0155b7] absolute bottom-2 left-8 lg:left-9 xl:left-10"
        >M</span
      >
    </h2>
    <section
      class="mt-6 md:mt-10 flex flex-col md:absolute right-5 p-4 text-left md:flex-row"
    >
      <div>
        <h3>Category</h3>
        <ul>
          <li>Phones</li>
          <li>Perfumes</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Facebook</li>
          <li>Insatgram</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </section>

    <p class="text-[#1f1f1f] text-sm absolute bottom-1 w-full">
      All rights reserved. Copyrights 2023
    </p>
  </footer>
</template>
<style scoped>
div {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 4px;
}
div h3 {
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  color: #fed74c;
}
li {
  color: white;
  font-size: 14px;
  text-indent: 0.5rem;
}
</style>
