import React, { useEffect, useRef, useState } from 'react';

const TextareaAutoResize = () => {
    const [text, setText] = useState("");
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState("auto");
    const [parentHeight, setParentHeight] = useState("auto");
    const handleChange = (e) => {
        setTextareaHeight("auto");
        setText(e.target.value);
    }
    useEffect(()=>{
        setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`)
    },[text])
    return (
        <div className="p-5" style = {{
            minHeight: parentHeight}}>
            <textarea className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-solid border-gray-500 focus:border-dotted resize-none"
                placeholder="Please enter your content..." 
                value={text} 
                ref={textareaRef}
                onChange={handleChange}
                style ={{
                    height: textareaHeight,
                }}>
            </textarea>
        </div>
    );
};

export default TextareaAutoResize;