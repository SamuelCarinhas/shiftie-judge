import { Navbar } from "../../components/Components.jsx";
import './views/prism-vsc-dark-plus.css';
import ICPCView from "./views/ICPCView.jsx";
import DesignView from "./views/DesignView.jsx";
import FireworkEffect from "./effects/FireworkEffect.jsx";
import AcceptedEffect from "./effects/AcceptedEffect.jsx";

function ProblemPage() {

    const problem = {
        type: 'icpc'
    }

    return (
        <div className="app">
            <Navbar />
            {
                problem.type === 'icpc'
                ?
                <DesignView></DesignView>
                :
                <DesignView></DesignView>
            }
        </div>
    )
}

export default ProblemPage;
