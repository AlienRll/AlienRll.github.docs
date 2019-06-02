const path = require("path");
const fs = require("fs");

module.exports = {
    title: 'Hello English',
    description: 'Just playing around',
    themeConfig: {
        sidebarDepth: 3,
        nav: [
            {
              text: "主页",
              link: "/"
            },
            {
              text: "自学考试",
              link: "/exam/guide.md"
            },
            {
              text: "杂货铺",
              link: "/grocery/guide.md"
            },
            {
              text: "一点知识",
              link: "/knowledge/guide.md"
            },
       
        ],
        sidebar: {
            "/exam/": [
            "guide",
                {
                    title: "高级英语",
                    collapsable: true,
                    children: genSidebarConfig("exam/one", true)
                },
            ],
            "/grocery/": [
                "guide",
                    {
                        title: "鸡汤美文",
                        collapsable: true,
                        children: genSidebarConfig("grocery/soup", true)
                    },
                ],
            "/knowledge/": [
                "guide",
                    {
                        title: "每日一句",
                        collapsable: true,
                        children: genSidebarConfig("knowledge/per_day", true)
                    },
                    {
                        title: "每天一个知识点",
                        collapsable: true,
                        children: genSidebarConfig("knowledge/per_grammar", true)
                    },
                ]
        }
    }
}


function genSidebarConfig(dir, hasSub) {
    let p = path.join(__dirname, "../", dir);
    let files = fs.readdirSync(p);
    let subDir = hasSub ? dir.split("/")[1] : "";
    files = files.map(item => {
      item = subDir
        ? subDir + "/" + path.basename(item, ".md")
        : path.basename(item, ".md");
      return item;
    });
    return files;
  }