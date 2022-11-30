import './Siderbar.css';
function Siderbar(){
    return (
        <div className="sider_container">
            <div className="logo">
                <strong><i>HeadphoneShop</i></strong>   
            </div>
            <div className="buttons_siderbar">
                <button className="button_sider">Trang chủ</button>
                <button className="button_sider">Diễn đàn</button>
                <button className="button_sider">Tin tức</button>
            </div>
            <div className="signin_signout"> 
                <button className="button_sign">Đăng nhập </button>
                <button className="button_sign">Đăng ký </button>
            </div>
        </div>
    )
}
export default Siderbar;