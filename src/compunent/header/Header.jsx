import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Tawssilat</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link
                            to={'/'}
                        >
                            contact
                        </Link>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><Link
                                    to={'acount'}
                                >
                                    your acount
                                </Link></li>
                                <li><Link
                                    to={'/'}
                                >
                                    feedback
                                </Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header