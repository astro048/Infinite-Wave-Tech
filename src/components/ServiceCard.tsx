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
} from 'react-icons/hi';
import type { ServiceType } from '../types/service';

const iconMap: Record<string, React.ReactNode> = {
    code: <HiOutlineCode className="w-6 h-6" />,
    server: <HiOutlineServer className="w-6 h-6" />,
    megaphone: <HiOutlineSpeakerphone className="w-6 h-6" />,
    photoshop: <span className="text-base font-bold tracking-tight">Ps</span>,
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
        <div className="group h-full min-h-[320px] rounded-[1.7rem] border border-white/10 bg-[#03131f]/60 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#081b2b] sm:p-6">
            <div className="flex items-center justify-center mb-8 sm:mb-10">
                <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border border-white/10 shadow-[0_0_16px_rgba(64,190,116,0.28)] ${service.iconBg} ${service.iconColor}`}
                >
                    {iconMap[service.iconName] || <HiOutlineCode className="h-7 w-7" />}
                </div>
            </div>

            <h3 className="mb-4 text-[1.05rem] font-bold leading-snug tracking-[-0.03em] text-white sm:text-[1.3rem]">
                {service.title}
            </h3>

            <p className="text-sm leading-7 text-slate-300 sm:text-[15px]">
                {service.description}
            </p>
        </div>
    );
};

export default ServiceCard;
