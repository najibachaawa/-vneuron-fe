const navigationConfig = [
  {
    id: "applications",
    title: "",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "pages",
        title: "Pages",
        type: "group",
        icon: "pages",
        children: [
          {
            id: "profile",
            title: "Profile",
            type: "item",
            icon: "person",
            url: "/pages/profile"
          },
          {
            id: "chat",
            title: "Chat",
            type: "item",
            icon: "chat",
            url: "/pages/chat"
          },
          {
            id: "users",
            title: "Users",
            type: "item",
            icon: "persons",
            url: "/pages/users"
          },
          {
            id: "notes",
            title: "Notes",
            type: "item",
            icon: "note",
            url: "/pages/notes"
          },
          {
            id: "contacts",
            title: "Contacts",
            type: "item",
            icon: "mail",
            url: "/pages/contacts"
          },
          {
            id: "errors",
            title: "Errors",
            type: "collapse",
            icon: "error",
            children: [
              {
                id: "404",
                title: "404",
                type: "item",
                url: "/pages/errors/error-404"
              },
              {
                id: "500",
                title: "500",
                type: "item",
                url: "/pages/errors/error-500"
              }
            ]
          }
        ]
      }
    ]
  }
];

export default navigationConfig;
