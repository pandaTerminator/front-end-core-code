interface Parma {
  tagName: string;
  props?: object;
  childrens?: Array<any>;
}

const renderElem = (vNode: Parma) => {
  const { tagName, props, childrens } = vNode;

  const $el = document.createElement(tagName);

  if (props) {
    for (const [k, v] of Object.entries(props)) {
      $el.setAttribute(k, v);
    }
  }

  if (childrens && childrens.length > 0) {
    for (const child of childrens) {
      $el.appendChild(render(child));
    }
  }

  return $el;
};

const render = (vNode: Parma) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  return renderElem(vNode);
};

export default render;
