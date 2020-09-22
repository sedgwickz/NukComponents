import React, { useState, useRef } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js'
import * as bootstrap from '@styled-icons/bootstrap'

export default () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const editorRef = useRef(null)

    function focusEditor() {
        //editorRef.current && editorRef.current.focus()
    }

    function handleSubmit() {
        console.log(editorState.getCurrentContent())
    }

    return (
        <div>
            编辑器
            <div>
                <bootstrap.TypeBold />
            </div>
            <div style={{ border: '1px solid gray' }}>
                <Editor
                    ref={editorRef}
                    editorState={editorState}
                    onChange={setEditorState}
                    placeholder="Enter something..."
                />
            </div>
            <button onClick={focusEditor}>focus</button>
            <button onClick={handleSubmit}>submit</button>
            <div>Preview:</div>
            <div></div>
        </div>
    )
}
