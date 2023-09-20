const SidebarFooter = () => {
    const socialContent = [
        { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
        { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
        { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
        { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
    ];

    return (
        <div className="mm-add-listing mm-listitem pro-footer">
            <div className="mm-listitem__text">
                <div className="contact-info">
                    <span className="phone-num">
                        <span>LLámanos</span>
                        <a href="tel:953067470">+51 953 067 470</a>
                    </span>
                    <a href="mailto:hola@chambita.pe" className="email">
                        hola@chambita.pe
                    </a>
                </div>

                <div className="social-links">
                    {socialContent.map((item) => (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}>
                            <i className={`fab ${item.icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SidebarFooter;
