import axios from "axios"
import { useState } from "react"
import User from "./User"

const Acount = () => {
    const [auth, setauth] = useState({
        email: "",
        password: ""
    })
    const [user, setuser] = useState(null)
    const [non, setnon] = useState(false)
    const [show, setshow] = useState(false)
    const [louding, setlouding] = useState(false)
    const getuser = async () => {
        setlouding(true)
        try {
            await axios.post("https://tawssilat-user-backend.onrender.com/auth", auth)
                .then(res => {
                    console.log(res.data.result);
                    if (res.data.good) {
                        setshow(true)
                        setuser(res.data.result)
                    } else {
                        setnon(true)
                    }
                })

        } catch (error) {
            console.log(error);

        } finally {
            setlouding(false)
        }
    }
    const hide = () => {
        setshow(false)
    }
    return (
        <div
            className="w-11/12 md:w-8/12 mx-auto mt-5"
        >
            <h1
                className="capitalize mb-5 text-2xl font-bold text-center"
            >fill the form </h1>
            {non && <span
                className="text-red-500  flex justify-center my-2 text-lg"
            >not faound</span>}
            {show && <User user={user} hide={hide} />}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    getuser()
                }}
                className="w-full justify-center flex flex-col"
            >

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email"
                        value={auth.email}
                        onChange={(e) => setauth({ ...auth, email: e.target.value })}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2 mt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password"
                        className="grow"
                        placeholder="password"
                        value={auth.password}
                        onChange={(e) => setauth({ ...auth, password: e.target.value })}
                    />
                </label>
                <button
                    type="submit"
                    className="w-10/12 mx-auto py-2 rounded-xl text-white bg-[#fc6011] mt-5"
                >
                    {louding ? <div className="animate-spin h-5 w-5  border-2 border-l-4 border-[#fff] rounded-full mx-auto" >
                    </div> : "submit"}
                </button>
            </form>
        </div>
    )
}

export default Acount