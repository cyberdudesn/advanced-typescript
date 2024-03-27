//////////////////////////////
// as const & keyof typeof
//////////////////////////////

const routes = {
  home: '/home',
  admin: '/admin',
  user: '/user',
} as const;

type Route = (typeof routes)[keyof typeof routes];

const goToRoute = (route: Route) => console.log(route);
goToRoute(routes.admin);
// Output: /admin
