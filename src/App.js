import './App.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import {useState} from 'react';

import { Editor } from '@toast-ui/react-editor';

const App = () => {

  const [data, setData] = useState('');
  return (
    <Editor 
      previewStyle="vertical"
      height="700px"
      initialEditType="markdown"
      initialValue="hello"
      usageStatistics={false}
    />
  );
}

export default App;
