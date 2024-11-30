import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import MinLinks from './MinLinks';
import { AnimatePresence } from 'framer-motion';

const MinNav = () => {
    const [show, setshow] = useState(false)
    const hide = () => setshow(false)
    return (
        <div
            className='md:hidden px-5 h-[80px] flex items-center'
        >
            <FaBars color='#fc6011'
                size={32}
                onClick={() => setshow(true)}
            />
            {show &&
                <AnimatePresence>

                    <MinLinks hide={hide} />
                </AnimatePresence>

            }
        </div>
    )
}

export default MinNav