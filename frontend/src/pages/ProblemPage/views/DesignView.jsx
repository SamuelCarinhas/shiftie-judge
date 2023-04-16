import './DesignView.css'
import { Link } from "react-router-dom";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism.css';
import {useEffect, useState} from "react";
import './prism-vsc-dark-plus.css';


function ICPCView() {
    const [code, setCode] = useState(
        `
<html>
    <head>
        <style>
        div {
            width: 100px;
            height: 100px;
            background: red;
        }
        </style>
    </head>
    <body>
        <div>
        </div>
    </body>
</html>
 `
    );

    useEffect(() => {
        document.getElementById("preview").src = "data:text/html;charset=utf-8," + encodeURIComponent(code);
    }, [code]);

    return (
        <div className="problem-page">
            <div className="description">
                <div className="title">
                    <h2>Sum two numbers</h2>
                    <h3>Design e Multimédia</h3>
                </div>
                <div className="item options">
                    <Link to="/prev">Previous Project</Link>
                    <Link to="/next">Next Project</Link>
                </div>
                <div className="item preview">
                    <div className="viewer">
                        <iframe id="preview" sandbox="allow-same-origin" title="Preview"></iframe>
                    </div>
                    <img width="400" height="300" src="https://cssbattle.dev/targets/46.png" />
                </div>
            </div>
            <div className="editor">
                <div className="window">
                    <div className="title-bar">
                        <div className="title-buttons">
                            <div className="title-button"></div>
                            <div className="title-button"></div>
                            <div className="title-button"></div>
                        </div>
                    </div>
                    <div className="editor_wrap">
                        <Editor
                            value={code}
                            onValueChange={(code) => setCode(code)}
                            highlight={(code) => highlight(code, languages.html)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ICPCView;
