import Social from "./Social";

const CopyrightFooter = () => {
    return (
        <div className="footer-bottom">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="copyright-text">
                        © {new Date().getFullYear()} Chambita
                        {/* <a href="https://themeforest.net/user/ib-themes" target="_blank" rel="noopener noreferrer">
                            Obi.com.pe
                        </a> */}
                        . Desarrollado por{" "}
                        <a href="https://obi.com.pe/" target="_blank" rel="noreferrer">
                            OBI Consulting
                        </a>
                    </div>
                    <div className="social-links">
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyrightFooter;
