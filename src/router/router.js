import Vue from "vue";
import Router from "vue-router";
import routes from "./routes"; // 引入路由表
import store from "@/store/store";

Vue.use(Router);

const loggedIn = store.getters["user/checkAuth"];

const router = new Router({
  mode: "history",
  routes: routes,
  /*
   * 滚动行为,
   * 注意: 这个功能只在支持 history.pushState 的浏览器中可用。
   * 第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) * 时才可用。
   */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// 全局前置守卫

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!loggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
    next();
  } else {
    next(); // 确保一定要调用 next()
  }
});

//全局后置钩子
router.afterEach((to, from) => {
  // ...
});

export default router;
