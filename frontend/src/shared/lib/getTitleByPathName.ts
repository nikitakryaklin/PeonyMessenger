export const getTitleByPathName = (pathName: string) => {
  switch (true) {
    case pathName.includes("chat"):
      return "My chats";
    case pathName.includes("group"):
      return "My groups";
    case pathName.includes("profile"):
      return "My profile";
    case pathName.includes("blocked"):
      return "Blocked users";
    case pathName.includes("settings"):
      return "Settings";
    case pathName.includes("help"):
      return "Help";
    case pathName.includes("info"):
      return "Info";
    case pathName.includes("recommendation"):
      return "Recommendation";
    default:
      return "";
  }
};
