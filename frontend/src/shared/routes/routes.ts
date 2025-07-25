export const ROUTES = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
  account: "/account/profile",
  setting: "/account/settings",
  chat: (id: string | number) => `/account/chat/${id}`,
} as const;
