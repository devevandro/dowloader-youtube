import React from 'react';
import './footer.scss';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
    const year = new Date();

    return (<>
        <footer className="footer">
        <div className="footer__line"></div>
            <span>
                Downloader é a maneira mais rapida e fácil de 
                fazer downloads de vídeos do Youtube. Converta os
                em MP3 ou MP4.
            </span>

            <p> &copy; {year.getFullYear()} Desenvolvido por <a href="#" target="_blank">Evandro Carvalho Ferreira</a></p>
            <span><a href="https://github.com/devevandro/dowloader-youtube" target="_blank"><FaGithubSquare className="footer__line--github" /></a></span>
        </footer>
    </>);
};

export default Footer;
