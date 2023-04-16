import './DesignView.css'
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image';
import { Link } from "react-router-dom";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup.js';
import 'prismjs/themes/prism.css';
import {useEffect, useState} from "react";
import './prism-vsc-dark-plus.css';
import Button from "../../../components/Buttons/Button.jsx";


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

    const [image, setImage] = useState('');

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
                <div id="test" className="item options">
                    <Link to="/prev">Previous Project</Link>
                    <Link to="/next">Next Project</Link>
                </div>
                <div className="item preview">
                    <div id="viewer" className="viewer">
                        <iframe id="preview" sandbox="allow-same-origin" title="Preview"></iframe>
                    </div>
                    <img src={image}/>
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
                        <div className="submit">
                            <button>Submit</button>
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
