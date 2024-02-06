import { SwiperSlide } from "swiper/react";


const SliderBarElement = ({ data }) => {
    const { image, title, description } = data;
    return (
        <SwiperSlide>
            <div className="flex items-center gap-4">
                <div className="h-[100px] w-[200px] rounded-sm overflow-hidden">
                    <img className="w-full h-full object-cover" src={image} alt="image" />
                </div>
                <div>
                    <h4 className="font-bold text-lg">{title}</h4>
                    <p className="text-xs">{description}</p>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default SliderBarElement;