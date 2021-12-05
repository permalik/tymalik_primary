import dynamic from 'next/dynamic';
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  require('codemirror/lib/codemirror.css');
  require('codemirror/theme/blackboard.css');
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

export default function EditorInstance({ editorTitle, value }) {
  return (
    <section className='editorSection'>
      <header>
        <p className='editorTitle'>{editorTitle}</p>
      </header>
      <NewEditor
        className='codemirrorWrapper'
        options={{
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
          mode: 'javascript',
          theme: 'blackboard'
        }}
        value={value}
      />
    </section>
  );
}
