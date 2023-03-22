<template>
  <Suspense>
    <div class="products">
      <router-view />
    </div>
    <template #fallback>
      <div class="mt-20">
        <img src="@/assets/loader.gif" alt="loader gif" class="m-auto" />
      </div>
    </template>
  </Suspense>
</template>
