import './ProblemPage.css'
import {Navbar} from "../../components/Components.jsx";
import {Link} from "react-router-dom";

function ProblemPage() {
    return (
        <div className="app">
            <Navbar />

            <div className="problem-page">
                <div className="description">
                    <div className="title">
                        <h2>Project Name</h2>
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
                </div>
                <div className="editor">

                </div>
            </div>
        </div>
    )
}

export default ProblemPage;
