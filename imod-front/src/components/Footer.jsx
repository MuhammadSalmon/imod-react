import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
        {/* Company Information */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-xl font-semibold">{t('imod')}</h2>
          <p className="text-sm mt-2 text-gray-400">
           {t("footer_p1")}
          </p>
          <p className="text-sm mt-2 text-gray-400">
          {t("address_1")} {t("address_2")}
          </p>
          <a href="tel:+992411005555" className="text-sm mt-2 text-gray-400">{t("phone")}: +992 41 100 5555</a> <br />
          <a href='mailto:info@imod.tj' className="text-sm mt-2 text-gray-400">Email: info@imod.tj</a>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-xl font-semibold">{t("imod")}</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                {t("main")}
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-gray-400 hover:text-white transition-colors">
                {t('history')}
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                {t('products')}
              </Link>
            </li>
            <li>
              <Link to="/vacancies" className="text-gray-400 hover:text-white transition-colors">
                {t('vacancies')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h2 className="text-xl font-semibold">{t("subscribe_to_us")}</h2>
          <div className="mt-4 flex justify-center md:justify-end space-x-4">
            <a
              href="https://www.facebook.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a> */}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {t("imod")}. {t("all_rights")}
      </div>  
    </footer>
  );
};

export default Footer;
