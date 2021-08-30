import { Permission, RouteConfig } from './types'

const isEachPermissionExists = (
  requiredPermissions: Permission[] = [],
  permissions: Permission[] = [],
): boolean => {
  return requiredPermissions.every((permission) =>
    permissions.includes(permission),
  )
}

export const authorizeRoutesByRoles = (
  routesConfig: RouteConfig[],
  permissions: Permission[],
): RouteConfig[] => {
  return routesConfig
    .filter((route) =>
      isEachPermissionExists(route.settings?.roles, permissions),
    )
    .map(({ routes, ...route }) => {
      if (routes) {
        route.routes = authorizeRoutesByRoles(routes, permissions)
      }
      return route
    })
}
