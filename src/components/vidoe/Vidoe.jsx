import { useRef, useState } from 'react';
import a from '../../assets/a.mp4'
import { AiFillCaretRight } from 'react-icons/ai';
import { FaPause } from 'react-icons/fa';

const Vidoe = () => {
    const [show, setshow] = useState(false)
    const videoRef = useRef(null);
    const handleFullscreen = () => videoRef.current.play()



    const stop = () => videoRef.current.pause()
    return (
        <div
            className='w-full relative mt-[105px]'
        >
            <video

                ref={videoRef} width="1600"
                className=" max-h-[30vh]"
            >
                <source src={a}></source>
            </video>
            <div
                className={`${!show && "bg-black bg-opacity-30"} absolute flex top-0 left-0 w-full h-full justify-center items-center`}
                onClick={() => {
                    if (!show) {
                        handleFullscreen()
                        setshow(true)
                    } else {
                        stop()
                        setshow(false)
                    }
                }}
            >
                {!show &&
                    <button
                    >
                        <AiFillCaretRight size={50} className='text-white' />
                    </button>
                }
            </div>
        </div>
    )
}

export default Vidoe