import { useState } from 'react'
import { motion } from 'framer-motion';

const Nav = () => {
    const [focus, setfocus] = useState("home")

    const links = ['home', 'about', 'contact', 'download'].map(e => {
        return <li
            key={e}
        >
            <a
                onClick={() => setfocus(e)}
                className={`mx-6 text-xl  ${focus === e && "underline"}`}
                href={`#${e}`}>{e}</a>
        </li>
    })
    return (
        <motion.nav
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className='hidden md:flex bg-[#fc6011] h-[85px] text-white items-center px-10 shadow-2xl -[#fc6011aa] rounded-tl-[60px] rounded-bl-[20px] list-none nav rounded-br-3xl'
        >{links}</motion.nav>
    )
}

export default Nav