export const rightBtnObjects = [
    {
      title: "About",
      active: "active",
      url: "/about",
      hasSub: false
    },
    {
      title: "Works",
      active: "active",
      url: "/works",
      hasSub: true,
      subLinks: [
        {
          title: "Works 1",
          active: "active",
          url: "/works/page1",
          hasSub: false
        },
        {
          title: "Works 2",
          active: "active",
          url: "/works/page2",
          hasSub: false
        },
        {
          title: "Works 3",
          active: "active",
          url: "/works/page3",
          hasSub: false
        }
      ]
    },
    {
      title: "Articles",
      active: "active",
      url: "#!",
      hasSub: true,
      subLinks: [
        {
          title: "Article 1",
          active: "active",
          url: "/articles/1",
          hasSub: false
        },
        {
          title: "Article 2",
          active: "active",
          url: "/articles/2",
          hasSub: false
        },
        {
          title: "Article 3",
          active: "active",
          url: "/articles/3",
          hasSub: false
        }
      ]
    },
    {
      title: "Contact",
      active: "active",
      url: "/contact",
      hasSub: false
    }
  ];