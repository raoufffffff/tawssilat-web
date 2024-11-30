import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const MinLinks = ({ hide }) => {
    const links = ['home', 'about', 'contact', 'download'].map(e => {
        return <li
            key={e}
        >
            <Link
                onClick={hide}
                className={`my-3 flex text-center text-xl`}
                to={`/#${e}`}>{e}</Link>
        </li>
    })
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.5 }}
                className='fixed bg-black opacity-70 w-full h-full top-0 left-0'
                onClick={hide}
            ></motion.div>
            <div
                className='fixed flex justify-center pt-20  w-full h-full top-0 left-0'
                onClick={hide}
            >
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='w-10/12 py-8 h-fit bg-white rounded-2xl flex flex-col list-none  items-center minnav'
                >
                    {links}
                </motion.nav>
            </div>

        </>
    )
}

export default MinLinks