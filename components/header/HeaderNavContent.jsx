import Link from "next/link";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
    const router = useRouter();
    return (
        <>
            <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                    <li className={router.pathname == "/" ? "current" : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={router.pathname == "/nosotros" ? "current" : ""}>
                        <Link href="/nosotros">Nosotros</Link>
                    </li>
                    <li className={router.pathname == "/oficios" ? "current" : ""}>
                        <Link href="/oficios">Oficios</Link>
                    </li>
                    {/* <li>
                        <Link href="/candidates-dashboard/my-profile">Perfil</Link>
                    </li> */}
                </ul>
            </nav>
        </>
    );
};

export default HeaderNavContent;
