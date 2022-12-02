import './DefaultLayout.css';
import Siderbar from '../Siderbar/Siderbar';
import SliderItem from '../../Component/SliderItem/SliderItem';
function DefaultLayout ({children}){
    return (
        <div className="wrapper">
            <div className="siderbar">
                <Siderbar/>
            </div>
            <div className='content'>
                <div className="slider">
                    <SliderItem/>
                </div>
                <div className="show_item">
                        {children} 
                </div>
            </div>
        </div>
    )
}
export default DefaultLayout;