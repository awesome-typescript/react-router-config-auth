// eslint-disable-next-line import/named
import { RouteConfig as ReactRouteConfig } from 'react-router-config'

export type Permission = number | string

type RouteSettings = {
  /** Each permission required to view the route */
  roles?: Permission[]
}

export type RouteConfig = ReactRouteConfig & {
  settings?: RouteSettings
  routes?: RouteConfig[]
}
