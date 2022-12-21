import DefaultLayout from "../../Layouts/Defaultlayout/DefaultLayout";
import SliderItem from "../../Component/SliderItem/SliderItem";
import CartItem from '../../Component/CartItem/CartItem';
import './Trangchu.css';
function Trangchu(){
    return ( 
        <DefaultLayout>
            <div className="slider">
                        <SliderItem/>
            </div>
            <div className='show-item'>
                <div className="best_seller_part">
                <div className="item_best_seller">
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
        </DefaultLayout>
    )
}

export default Trangchu;