<template>
  <main class="bg-[#fed74c]">
    <section
      class="relative hero-section bg-[#fed74c] max-[600px]:h-[550px] h-[550px] p-4 md:p-8 md:w-[90%] md:rounded-2xl mx-auto"
    >
      <div
        class="absolute w-[90%] min-[500px]:w-[70%] sm:w-[90%] md:w-1/2 h-[450px]"
      >
        <div
          class="font-medium absolute top-2 md:top-20 w-[90%] sm:w-3/5 md:w-[85%] lg:w-[75%] min-[1200px]:w-[55%] xl:left-5"
        >
          <h1 class="text-5xl font-bold text-[#1f1f1f] text-left p-4 pr-2">
            Welcome to You-Mart
          </h1>
          <p class="text-left px-4 w-[100%] text-[#1f1f1f]">
            You-Mart offers the best online shopping experience and products at
            just one click.
          </p>
          <button
            class="absolute left-4 xl:left-3 -bottom-16 bg-[#1f1f1f] text-white w-[35%] py-3 rounded-3xl hover:bg-black"
          >
            Shop now
          </button>
        </div>

        <p
          class="absolute max-[360px]:text-sm max-[400px]:bottom-14 bottom-24 min-[460px]:bottom-32 md:bottom-48 min-[500px]:-right-24 -right-2 sm:right-2 md:-right-60 lg:-right-32 text-base w-1/2 min-[500px]:w-3/5 sm:w-2/5 md:w-3/5 lg:w-[35%] text-left bg-[#0155b7] text-white p-4 rounded-2xl"
        >
          Shop from a wide range of products from the comfort of you home.
        </p>
      </div>
      <div
        class="absolute z-40 right-5 min-[580px]:left-0 min-[580px]:right-auto sm:left-8 xl:right-14 -bottom-12 md:-bottom-16 md:right-5 lg:right-5"
      >
        <img
          src="../assets/shopping-cart.png"
          alt="red shopping cart"
          class="md:float-right skew-y-[15deg] w-[80%] min-[500px]:w-[70%] md:w-[55%] min-[860px]:w-1/2 min-[950px]:w-[45%] min-[1120px]:w-2/5 min-[1360px]:w-[35%]"
        />
      </div>
    </section>
    <!-- <section class="featured-product-section">
    <section class="popular-categorize-section">
      <h2>Categories</h2>
      <div class="">
        <h1>A mart for all your needs</h1>
        <p>
          YOU-MART offers the best online shopping experience and products at
          just one click
        </p>
      </div>
    </section> -->
    <section
      class="bg-white -mt-5 relative rounded-t-[30px] z-30 min-h-[700px]"
    >
      <h2 class="text-[#0155b7] relative top-24 font-semibold text-3xl">
        Features
        <span
          class="absolute md:w-[5%] md:left-[47.5%] w-[16%] left-[42%] -bottom-0 border-t-[4px] border-dashed border-[#fed74c] decoration-4 decoration-white decoration-wavy"
        ></span>
      </h2>
      <section
        class="featured-product-section w-[90%] min-h-full flex flex-wrap gap-10 justify-center md:justify-evenly mx-auto py-32 md:p-12 md:my-24 xl:justify-between"
      >
        <div
          class="relative lg:top-32 border border-white shadow-lg backdrop-blur-sm bg-white p-8 text-center w-4/5 md:w-1/3 lg:w-[33%] xl:w-[30%]"
        >
          <img src="" alt="" />
          <p>
            Explore products from various categories such as electronics,
            fashion, beauty, home and garden, and more
          </p>
        </div>
        <div
          class="border relative left-8 md:left-0 border-white shadow-lg backdrop-blur-sm bg-white p-8 text-center w-3/4 md:w-1/3 lg:w-[30%]"
        >
          <img src="" alt="" />
          <p>
            Buy with confidence from trusted seller who have been thoroughly
            vetted and verified
          </p>
        </div>
        <div
          class="border relative -left-5 md:left-12 lg:left-0 lg:top-32 border-white shadow-lg backdrop-blur-sm bg-white p-8 text-center w-3/4 md:w-1/3 lg:w-1/4"
        >
          <img src="" alt="" />
          <p>Enjoy hassle-free shopping with our easy-to-use interface</p>
        </div>
        <div
          class="border relative left-8 top-5 mx-auto border-white shadow-lg backdrop-blur-sm bg-white p-8 text-center w-3/4 md:w-1/3 lg:w-[30%]"
        >
          <img src="" alt="" />
          <p>
            Get in touch with our friendly customer support team 24/7 for any
            queries or issues
          </p>
        </div>
      </section>
    </section>
  </main>
  <!-- <footer>
    You-mart Your one stop destination for all your shopping needs.
  </footer> -->
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
