import { services } from "../constants/index";
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="flex gap-9 max-container justify-center flex-wrap">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
