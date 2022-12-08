import './DefaultLayout.css';
import Siderbar from '../Siderbar/Siderbar';
import SliderItem from '../../Component/SliderItem/SliderItem';
import CartItem from '../../Component/CartItem/CartItem';
function DefaultLayout ({children}){
    return (
        <div className="wrapper">
            <div className="siderbar">
                <Siderbar/>
            </div>
            <div className='content-container'>
                <div className='content'>
                    <div className="slider">
                        <SliderItem/>
                    </div>
                    <div className='show-item'>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default DefaultLayout;