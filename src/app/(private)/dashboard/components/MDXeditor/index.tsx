"use client"

import '@mdxeditor/editor/style.css'
import {
  // plugins
  toolbarPlugin,
  headingsPlugin,
  listsPlugin,
  thematicBreakPlugin,
  quotePlugin,
  linkPlugin,
  linkDialogPlugin,
  markdownShortcutPlugin,
  tablePlugin,
  // Mdx
  MDXEditor,
  // Components
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  CreateLink,
  InsertCodeBlock,
  InsertTable,
  codeBlockPlugin,
  codeMirrorPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage
} from '@mdxeditor/editor'

interface IMDXParams { setMdxContent : (content: string) => void }

function App({setMdxContent}: IMDXParams) {
  return (
    <MDXEditor
      // onChange={}
      onChange={(newContent: string) => {
        // Actualiza el estado cuando el contenido cambia
        setMdxContent(newContent);
      }}
      markdown='Eliseo'
      contentEditableClassName="prose"
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BlockTypeSelect />
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              {/* <InsertTable  /> */}
              <CreateLink />
              {/* <InsertCodeBlock /> */}
              <ConditionalContents
                options={[
                  { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
                  {
                    fallback: () => (<>
                      <InsertCodeBlock />
                    </>)
                  }
                ]}
              />
            </>)
        }),
        headingsPlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
        quotePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        markdownShortcutPlugin(),
        // tablePlugin,
        codeBlockPlugin({ defaultCodeBlockLanguage: 'arduino'}),
        codeMirrorPlugin({ codeBlockLanguages: { arduino: 'arduino' }}),
      ]}

    />
  )
}

export default App