import './DefaultLayout.css';
import Siderbar from '../Siderbar/Siderbar';
function DefaultLayout ({children}){
    return (
        <div className="wrapper">
            <div className="siderbar">
                <Siderbar/>
            </div>
            <div className="wrapper_left">
                
            </div>
            <div className="wrapper_right">
                    {children}
            </div>
        </div>
    )
}
export default DefaultLayout;