import React, { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import "highlight.js/styles/stackoverflow-dark.css";

export default function Code(props) {
    const langs = { "cpp": cpp, "python": python, "javascript": javascript, "java": java };

    if (!hljs.getLanguage(props.lang)) {
        hljs.registerLanguage(props.lang, langs[props.lang]);
    }

    const highlightedCode = hljs.highlight(props.data, { language: props.lang }).value;

    return (
        <pre>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    );
}
