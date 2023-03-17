<template>
  <Suspense>
    <div class="products">
      <router-view />
    </div>
    <template #fallback>yet to load...</template>
  </Suspense>
</template>
