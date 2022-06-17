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
