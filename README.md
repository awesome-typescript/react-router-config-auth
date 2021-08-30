# react-router-config-auth

### Install

#### Create file .npmrc
```
echo "@awesome-typescript:registry=https://npm.pkg.github.com" > .npmrc
```
#### Install npm package
```
npm install @awesome-typescript/react-router-config-auth@1.0.0 --save --save-exact
```

```ts
{renderRoutes(
  authorizeRoutesByRoles(
    routes,
    permissions.map((permission) => permission.id),
  ),
)}
```

```tsx
export const routes: RouteConfig[] = [
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    component: MainTemplate,
    routes: [
      {
        path: '/posts',
        exact: true,
        component: React.lazy(
          () => import('./routes/posts'),
        ),
        settings: {
          roles: [CanBrowsePosts],
        },
      },
      {
        path: '/news',
        exact: true,
        component: React.lazy(() => import('./routes/news')),
        settings: {
          roles: [CanBrowseNews],
        },
      },
  	]
  }
]
```
