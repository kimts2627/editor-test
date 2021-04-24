import React from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
const EditorWrap = ({forwardedRef}) => {

  return (
    <Editor 
      previewStyle="vertical"
      height="700px"
      initialEditType="markdown"
      initialValue="hello"
      usageStatistics={false}
      ref={forwardedRef}
    />
  )
}

export default EditorWrap;
