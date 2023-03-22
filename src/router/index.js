import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ProductsView.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/products",
        component: () => import("@/components/ProductsComponent.vue"),
      },
      {
        path: ":title",
        component: () => import("@/components/ProductComponent.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    beforeEnter: async (to, from, next) => {
      if (await getCurrentUser()) {
        alert("You are currently logged in");
        next("/");
        return false;
      } else next();
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("../views/Error404Page.vue"),
  },
];

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you don't have access");
      next("/login");
    }
  } else next();
});

export default router;
