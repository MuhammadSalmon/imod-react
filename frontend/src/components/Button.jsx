import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AnimatedLink = ({link}) => {
  const { i18n, t } = useTranslation();
  
  return(
  <motion.div
    whileHover={{ scale: 1.05 }} // Slight scaling on hover
    whileTap={{ scale: 0.95 }} // Slight press-down effect on tap
  >
    <Link
      to={link}
      className="px-6 md:px-8 py-2 md:py-3 bg-customDarkBlue text-white text-lg md:text-xl rounded transition-colors duration-300 overflow-hidden relative"
      style={{
        background: "linear-gradient(to right, #1E3A8A, #3B82F6)", // Start color gradient
        backgroundSize: "200% auto", // Double width to allow for movement
        transition: "background-position 0.4s ease-in-out", // Smooth transition
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundPosition = "100% 0")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundPosition = "0 0")}
    >
      {t('button')}
    </Link>
  </motion.div>
)
};

export default AnimatedLink;
