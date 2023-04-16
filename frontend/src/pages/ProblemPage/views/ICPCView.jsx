import './ICPCView.css'
import { Link } from "react-router-dom";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css';
import { useState } from "react";
import './prism-vsc-dark-plus.css';
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function ICPCView() {
    const [code, setCode] = useState(
        `print(sum(map(int, input().split())))`
    );
    return (
        <div className="problem-page">
            <div className="description">
                <div className="title">
                    <h2>Sum two numbers</h2>
                    <h3>IPRP</h3>
                </div>
                <div className="item options">
                    <Link to="/prev">Previous Project</Link>
                    <Link to="/next">Next Project</Link>
                </div>
                <div className="item guidelines">
                    <h2>Guidelines</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. </p>
                </div>
                <div className="item input">
                    <h2>Input</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. </p>
                </div>
                <div className="item output">
                    <h2>Output</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. </p>
                </div>
                <div className="item sample">
                    <div className="sample-input">
                        <h2>Sample Input</h2>
                        <pre>
                            5 3
                        </pre>
                    </div>
                    <div className="sample-input">
                        <h2>Sample Output</h2>
                        <pre>
                            8
                        </pre>
                    </div>
                </div>
                <div className="item note">
                    <h2>Note</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. </p>
                </div>

                <div className="item submissions">
                    <div className="fields">
                        <div className="item big">
                            <h2>Submission History</h2>
                        </div>
                        <div className="item">
                            <h2>Day</h2>
                        </div>
                        <div className="item">
                            <h2>Hour</h2>
                        </div>
                    </div>
                    <div className="submissions">
                        <div className="submission">
                            <div className="fields">
                                <div className="item big">
                                    <p>main.py</p>
                                    <FontAwesomeIcon className="green" icon={faCheck} />
                                </div>
                                <div className="item">
                                    <p>16/04/2023</p>
                                </div>
                                <div className="item">
                                    <p>01:46</p>
                                </div>
                            </div>
                        </div>
                        <div className="submission">
                            <div className="fields">
                                <div className="item big">
                                    <p>main.py</p>
                                    <FontAwesomeIcon className="red" icon={faXmark} />
                                </div>
                                <div className="item">
                                    <p>16/04/2023</p>
                                </div>
                                <div className="item">
                                    <p>01:50</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            highlight={(code) => highlight(code, languages.python)}
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
