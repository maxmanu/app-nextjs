import Link from "next/link";

const SidebarHeader = () => {
    return (
        <div className="pro-header">
            <div className="logo-box">
                <div className="logo">
                    <Link href="/">
                        <h2 className="">CHAMBITA</h2>
                    </Link>
                </div>
            </div>
            <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
                <span className="flaticon-close"></span>
            </div>
            {/* icon close */}
        </div>
    );
};

export default SidebarHeader;
