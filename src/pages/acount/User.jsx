import axios from "axios"

const User = ({ user, hide }) => {
    const d = async () => {
        try {
            await axios.delete(`https://tawssilat-user-backend.onrender.com/user/${user._id}`)
                .then(res => {
                    if (res.data.good) {
                        hide()
                    }
                })
                .then()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div

                className="fixed  bg-[#333a] top-0 left-0 w-full h-full"
            >

            </div>
            <div
                onClick={() => {
                    hide()
                }}
                className="fixed flex justify-center items-center top-0 left-0 w-full h-full"
            >
                <div
                    className="bg-white rounded-xl z-50  py-5 w-10/12"
                >
                    <h1
                        className="text-xl mx-auto font-bold text-center capitalize my-2"
                    >account information</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}

                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>#</th>
                                    <td>name</td>
                                    <td>{user.name}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>#</th>
                                    <td>email</td>
                                    <td>{user.email}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>#</th>
                                    <td>phone</td>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <td>password</td>
                                    <td>{user.password}</td>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <td>city</td>
                                    <td>{user.city}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="w-full flex justify-center"
                    >

                        <button
                            onClick={() => d()}
                            className="mx-3 rounded-xl bg-red-500 text-white px-3 py-2 capitalize"
                        >delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User