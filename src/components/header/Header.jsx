import { Link } from 'react-router-dom'
import MinNav from './nav/MinNav'
import Nav from './nav/Nav'
import logo from '../../assets/icon.png'
const Header = () => {
    return (
        <header
            className='w-full shadow-xl flex justify-between  pl-5 rounded-b-3xl max-h-[80px] fixed top-0 left-0 z-50 bg-white'
        >
            <Link
                to={'/'}
                className='flex items-center'
            >
                <img
                    src={logo}
                    className='inline w-[80px]'
                    alt='logo'
                />
                <span
                    className='mt-4 -translate-x-5 text-stone-700 uppercase text-lg font-semibold'
                >Tawssilat</span>
            </Link>
            <Nav />
            <MinNav />
        </header>
    )
}

export default Header