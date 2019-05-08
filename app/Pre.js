/**
 * 预处理
 */

import React, { Component, cloneElement } from "react";
import { Text, Alert } from "react-native";

let styles = { color: "#333" };
// let render = Text.prototype.render;
// Text.prototype.render = function (...args) {
//     let originText = render.apply(this, args);
//     return cloneElement(originText, {
//         style: [
//             styles,
//             originText.props.style,
//         ]
//     });
// };
let oldRender = Text.render;
Text.render = function(...args) {
  let origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [styles, origin.props.style]
  });
};

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {}
  };

  ErrorUtils.setGlobalHandler(e => {
    //Alert.alert("异常", JSON.stringify(e));
  });
}
