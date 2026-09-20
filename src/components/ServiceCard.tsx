import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineSpeakerphone,
  HiOutlinePhotograph,
  HiOutlinePencilAlt,
  HiOutlineVideoCamera,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineShare,
  HiOutlineColorSwatch,
} from "react-icons/hi";

import type { ServiceType } from "../types/service";
import '../Styles/ServiceCard.css';

const iconMap: Record<string, React.ReactNode> = {
  code: <HiOutlineCode className="w-6 h-6" />,
  server: <HiOutlineServer className="w-6 h-6" />,
  megaphone: <HiOutlineSpeakerphone className="w-6 h-6" />,
  photoshop: <span className="text-base font-bold">Ps</span>,
  poster: <HiOutlinePhotograph className="w-6 h-6" />,
  pencil: <HiOutlinePencilAlt className="w-6 h-6" />,
  video: <HiOutlineVideoCamera className="w-6 h-6" />,
  cube: <HiOutlineCube className="w-6 h-6" />,
  chart: <HiOutlineChartBar className="w-6 h-6" />,
  share: <HiOutlineShare className="w-6 h-6" />,
  uiux: <HiOutlineColorSwatch className="w-6 h-6" />,
};

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      className="service-card"
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#82cf4b]
          text-white
        "
      >
        {iconMap[service.iconName] || (
          <HiOutlineCode className="h-6 w-6" />
        )}
      </div>

      {/* Content */}
      <div className="pt-20 mt-auto">

        <h3
          className="
            mb-6
            text-xl
            font-bold
            leading-tight
            tracking-[-0.02em]
            text-white
            sm:text-[1.35rem]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            text-sm
            leading-7
            text-slate-300
            sm:text-[15px]
          "
        >
          {service.description}
        </p>

      </div>
    </div>
  );
};

export default ServiceCard;