<template>
  <main>
    <section class="hero-section">
      <div class="">
        <h1>A mart for all your needs</h1>
        <p>
          YOU-MART offers the best online shopping experience and products at
          just one click
        </p>
        <button>Shop now</button>
      </div>
    </section>
    <section class="featured-product-section">
      <h2>Featured Products</h2>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
    </section>
    <section class="popular-categorize-section">
      <h2>Categories</h2>
      <div class="">
        <h1>A mart for all your needs</h1>
        <p>
          YOU-MART offers the best online shopping experience and products at
          just one click
        </p>
        <button>Shop now</button>
      </div>
    </section>
    <section class="featured-product-section">
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
      <div class="">
        <img src="" alt="" />
        <router-link to="/products/">Shop now</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "HelloWorld",
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
