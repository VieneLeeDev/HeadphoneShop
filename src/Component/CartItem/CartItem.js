import './CartItem.css';
function CartItem(){
    return(
        <div className='container-cart'>
            <div className='img_item'>
                <img id='1' src='https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw99153f00/1.JBL_Live%20Pro%202_Product%20image_Hero_Blue.jpg?sw=556&sh=680&sm=fit&sfrm=png' alt="description"></img>
            </div>
           <div className='title_price'>
           <div className='name_item'>
                <span>Name Item</span>
            </div>
            <div className='price_item'>
                <span>10.000.000 vnd</span>
            </div>
           </div>
        </div>
    )
}
export default CartItem;