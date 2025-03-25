import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

const OtherServices = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {t('services.otherServices.title')}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('services.otherServices.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {t('services.otherServices.services', { returnObjects: true }).map((service: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-4">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                {t('common.bookNow')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherServices; 