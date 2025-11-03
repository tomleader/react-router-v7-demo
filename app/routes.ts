import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("ssr", "routes/ssr.tsx"),
  route("streaming", "routes/streaming.tsx"),
  route("prerender", "routes/prerender.tsx"),
  route("node-functions", "routes/node-functions.tsx"),
  route("edge-functions", "routes/edge-functions.tsx"),
] satisfies RouteConfig;
