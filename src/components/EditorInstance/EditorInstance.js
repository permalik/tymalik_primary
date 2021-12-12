import dynamic from 'next/dynamic';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/panda-syntax.css');
  require('codemirror/mode/javascript/javascript.js');
}

const NewEditor = dynamic(
  async () => {
    const module = await import('react-codemirror2');
    return module.Controlled;
  },
  {
    ssr: false
  }
);

export default function EditorInstance({ value }) {
  return (
    <section className='editorSection'>
      <NewEditor
        className='codemirrorWrapper'
        options={{
          lineNumbers: false,
          lineWrapping: true,
          lint: true,
          mode: 'javascript',
          tabindex: '-1',
          theme: 'panda-syntax'
        }}
        value={value}
      />
    </section>
  );
}
