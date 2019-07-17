interface Parma {
  props?: object;
  childrens?: Array<any>;
}

export default (tagName: string, tagContent?: Parma) => {
  const vElm = Object.create(null);
  const { props, childrens } = tagContent;
  Object.assign(vElm, {
    tagName,
    props,
    childrens
  });

  return vElm;
};
