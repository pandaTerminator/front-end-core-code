import createElement from "./src/virtual_create";
import render from "./src/render";

const vApp = createElement("div", {
  props: { id: "app" },
  childrens: [
    `Hello world`,
    createElement("div", {
      props: {
        id: "header"
      },
      childrens: [
        `test`,
        createElement("img", {
          props: {
            src:
              "https://avatars3.githubusercontent.com/u/11087172?s=400&u=00974bd40384a7b846f44ac3dd1939f8706073f9&v=4"
          }
        })
      ]
    })
  ]
});

const $app = render(vApp);

document.getElementsByTagName("body")[0].append($app);
