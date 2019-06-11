export default [
  // 捕获所有路由或 404 Not found 路由
  {
    path: "*",
    component: () =>
      import("../views/public/not-fund-component/NotFoundComponent.vue")
  }
];
