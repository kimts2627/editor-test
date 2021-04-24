import React, { useRef, useEffect } from 'react';
import EditorWrap from './EditorWrap';


const ForwardedEditor = React.forwardRef((props, ref) => {
  return (
    <EditorWrap forwardedRef={ref} />
  );
})

const EditorComp = () => {

  const EditorRef = useRef();

  useEffect(() => {
    console.log(EditorRef.current)
  });

  return <ForwardedEditor ref={EditorRef} />
}

export default EditorComp;
