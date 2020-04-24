const templateData =
{
  site: {
    title: "CBA",
    subtitle: "Chromium Browser Automation (extension for chrome browser automation)",
    navigation: [
      {
        title: "Home",
        link: "#"
      },
      {
        title: "Documentation",
        link: "#",
        sub_items: [
          {
            title: "Interface",
            link: "",
            sub_items: [
              {
                title: "Project Datagrid",
                link: ""
              },
              {
                title: "Actions Datagrid",
                link: ""
              },
              {
                title: "Functions Datagrid",
                link: ""
              }
            ]
          },
          {
            title: "Actions",
            link: "",
            sub_items: [
              {
                title: "inject",
                link: ""
              },
              {
                title: "inject-cs",
                link: ""
              },
              {
                title: "bg-inject",
                link: ""
              },
              {
                title: "bg-function (deprecated)",
                link: ""
              },
              {
                title: "change",
                link: ""
              },
              {
                title: "check",
                link: ""
              },
              {
                title: "click",
                link: ""
              },
              {
                title: "submit-click",
                link: ""
              },
              {
                title: "update",
                link: ""
              },
              {
                title: "timer",
                link: ""
              },
              {
                title: "redirect",
                link: ""
              },
              {
                title: "copy",
                link: ""
              },
              {
                title: "pause",
                link: ""
              }
            ]
          },
          {
            title: "Functions",
            link: "",
            sub_items: [
              {
                title: "clear cookies",
                link: ""
              }
            ]
          },
          {
            title: "Recording",
            link: ""
          },
          {
            title: "Play",
            link: ""
          },
          {
            title: "Clipboard",
            link: ""
          },
          {
            title: "Options",
            link: "",
            sub_items: [
              {
                title: "CBA",
                link: ""
              },
              {
                title: "Functions Option",
                link: ""
              },
              {
                title: "Import-Export",
                link: ""
              }
            ]
          }
        ]
      },
      {
        title: "Tutorial",
        link: "#",
        sub_items: [
          {
            title: "Registration Demo",
            link: ""
          },
          {
            title: "Facebook Demo",
            link: ""
          },
          {
            title: "Recording",
            link: ""
          },
          {
            title: "Video Presentation for CBA",
            link: ""
          }
        ]
      },
      {
        title: "Ready Projects",
        link: "#",
        sub_items: [
          {
            title: "FB like/unlike",
            link: ""
          }
        ]
      },
      {
        title: "What's New",
        link: "#",
        sub_items: [
          {
            title: "Version 8.0",
            link: ""
          },
          {
            title: "Version 6.0",
            link: ""
          },
          {
            title: "Version 5.0",
            link: ""
          }
        ]
      }
    ]
  }
};


const port = {
  http: 3000
};
module.exports = { templateData, port };
