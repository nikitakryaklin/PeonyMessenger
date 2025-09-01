const settingHelper = "/account/settings";

export const ROUTES = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
  account: "/account/profile",
  setting: {
    home: settingHelper,
    customize: settingHelper + "/customize",
    storage: settingHelper + "/storage",
  },
  group: "/account/group",
  blocked_users: "/account/blocked_users",
  help: "/account/help",
  info: "/account/info",
  recommendation: "/account/recommendation",
  chat: "/account/chat",
  chatById: (id: string | number) => `/account/chat/${id}`,
  groupById: (id: string | number) => `/account/group/${id}`,
} as const;
