import './main.css';
import logo from './logo.svg'
import promo_img from './promo_img_s.png';

function Main(){
    return (
        <div className='main'>
            <div className="header">
                <div className='header_left'>
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="header_energosila">
                        <span>ГК Энергосила</span>
                    </div>
                </div>
                <div className="header_menu">
                    <a href='' className="menu_link">Главная</a>
                    <a href='' className="menu_link">Компания</a>
                    <a href='' className="menu_link">Каталог</a>
                    <a href='' className="menu_link">Контакты</a>
                    <a href='' className="menu_link">Доставка</a>
                    <a href='' className="menu_link">Партнеры</a>
                </div>
                <div className="header_contacts">
                    <a className='contact' href='tel:88612604720'>8 861 260 47 20</a>
                    <a  className='contact' href='tel:89182506618'>8 918 250 66 10</a>
                </div>
            </div>
            <div className="promo">
                <div className="promo_text">
                    Какой то невьебенный текст
                </div>
                <div className="promo_bnt">
                    <button>Оформить заказ</button>
                </div>
            </div>
            <div className="promo_image">
                <img src={promo_img} alt="" />
                {/* <img src={promo_image} alt="#" /> */}
            </div>
            <div className="right_place"></div>
            <div className="bottom_place"></div>
        </div>
    )
};

export default Main;