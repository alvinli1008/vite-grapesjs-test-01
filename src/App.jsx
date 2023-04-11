import React, { useState, useEffect } from "react";

import "grapesjs/dist/css/grapes.min.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsPresetNewsletter from "grapesjs-preset-newsletter";

import b8s from "./assets/text.png";
import { getPngHtml } from "./utils";
// import cssOverrides from "./styles/overrides";

const initEditor = async () => {
  // const $style = document.createElement("style");
  // $style.innerHTML = cssOverrides;
  // document.head.appendChild($style);

  const grapesjs = await import("grapesjs");
  var editor = grapesjs.init({
    container: "#gjs",
    height: "100%",
    // showOffsets: 1,
    // noticeOnUnload: 0,
    fromElement: 1,
    // storageManager: { autoload: 0 },
    // layerManager: {
    //   appendTo: ".layers-container",
    // },
    // panels: {
    //   defaults: [
    //     // {
    //     //   id: "layers",
    //     //   el: ".layers__left",
    //     //   // Make the panel resizable
    //     //   resizable: {
    //     //     maxDim: 350,
    //     //     minDim: 200,
    //     //     tc: 0, // Top handler
    //     //     cl: 1, // Left handler
    //     //     cr: 0, // Right handler
    //     //     bc: 0, // Bottom handler
    //     //     // Being a flex child we need to change `flex-basis` property
    //     //     // instead of the `width` (default)
    //     //     keyWidth: "flex-basis",
    //     //   },
    //     // },
    //   ],
    // },
    // plugins: [gjsBlocksBasic], //gjsBlocksBasic, gjsPresetNewsletter, gjsPresetWebpage
  });

  // editor.BlockManager.add("testBlock", {
  //   label: "Block",
  //   attributes: { class: "gjs-fonts gjs-f-b1" },
  //   content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center" class="test" onclick="console.log(111)">Test block</div><style>.test{color:red;}</style>`,
  // });

  editor.BlockManager.add("text", {
    label: getPngHtml(b8s),
    category: { label: "Basic", open: false },
    content: {
      type: "text",
      content: "Insert your text",
      style: { padding: "10px" },
    },
  });
  // editor.BlockManager.add("recommended_products", {
  //   label: "Recommended products",
  //   attributes: { class: "gjs-fonts gjs-f-b1" },
  //   content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center" class="test" onclick="console.log(111)">Test block</div><style>.test{color:red;}</style>`,
  // });

  // const layers = editor.Layers;

  // const component = editor.getSelected();
  // const components = layers.getComponents(component);
  // console.log(editor);

  return editor;
};

function App() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    initEditor().then((res) => {
      setEditor(res);
    });

    return () => {};
  }, []);

  console.log("editor", editor);

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <div className="layers" style={{ width: "100%", height: "100%" }}>
        <div className="layers__left">
          <div className="layers-container"></div>
        </div>
        <div
          className="layers__editor"
          style={{ width: "100%", height: "100%" }}
        >
          <div id="gjs"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
