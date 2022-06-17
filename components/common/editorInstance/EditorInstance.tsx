// import dynamic from "next/dynamic";
import * as CodeMdirror from "codemirror";
import * as ReactCodeMirror from "react-codemirror2-react-17";

// require("codemirror/lib/codemirror.css");
// require("codemirror/theme/panda-syntax.css");
// require("codemirror/mode/javascript/javascript.js");

// if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
//   require("codemirror/lib/codemirror.css");
//   require("codemirror/theme/panda-syntax.css");
//   require("codemirror/mode/javascript/javascript.js");
// }

// const NewEditor = dynamic(
//   async () => {
//     const editor = await import("react-codemirror2-react-17");
//     return editor.Controlled;
//   },
//   {
//     ssr: false
//   }
// );

interface EditorProps {
  value: string
}

import CodeMirror from "@uiw/react-codemirror";
import {javascriptLanguage} from "@codemirror/lang-javascript";

export default function EditorInstance({value}: EditorProps) {
  return (
    <section className="editorSection">
      <CodeMirror
        className="codemirrorWrapper"
        extensions={[javascriptLanguage]}
        theme={"dark"}
        value={value}
      />
    </section>
  );
}
