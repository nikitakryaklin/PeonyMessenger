const settingHelper = "/account/settings";

export const ROUTES = {
  home: "/",
  rules: "/rules",

  login: "/auth/login",
  register: "/auth/register",

  account: "/account/profile",
  setting: {
    home: settingHelper,
    customize: settingHelper + "/customize",
    storage: settingHelper + "/storage",
  },
  blocked_users: "/account/blocked_users",
  help: "/account/help",
  info: "/account/info",
  recommendation: "/account/recommendation",

  chat: "/account/chat",
  chatById: (id: string | number) => `/account/chat/${id}`,

  group: "/account/group",
  groupById: (id: string | number) => `/account/group/${id}`,
} as const;
