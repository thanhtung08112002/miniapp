import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PregnancyPackages from '../components/services/PregnancyPackages';
import GeneralHealthCheck from '../components/services/GeneralHealthCheck';
import OtherServices from '../components/services/OtherServices';
import ScrollToTop from '../components/ScrollToTop';

const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          {t('services.title')}
        </h1>
        
        <div className="space-y-16">
          <PregnancyPackages />
          <GeneralHealthCheck />
          <OtherServices />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Services; 