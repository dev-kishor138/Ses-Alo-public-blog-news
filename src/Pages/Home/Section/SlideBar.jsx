import Container from "../../../components/Container";
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

import { Navigation } from 'swiper/modules';


import image1 from "../../../assets/slideerimage/images2.jpg"
import image2 from "../../../assets/slideerimage/img1.jpg"
import image3 from "../../../assets/slideerimage/img4.jpg"
import image4 from "../../../assets/slideerimage/img3.jpg"
import image5 from "../../../assets/slideerimage/img4.png"





const SlideBar = () => {
    return (
        <Container>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper relative"
                >
                    <SwiperSlide>
                        <div className="flex items-center gap-4">
                            <div className="h-[100px] w-[200px] rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover" src={image1} alt="image" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">আসন ভাগাভাগি নিয়ে জাপার সঙ্গে আলোচনা হয়নি</h4>
                                <p className="text-xs">জাতীয় পার্টির (জাপা) সঙ্গে আসন ভাগাভাগির বিষয়ে কোনো আলোচনা হয়নি বলে দাবি...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center gap-4">
                            <div className="h-[100px] w-[200px] rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover" src={image2} alt="image" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">টাইম ম্যাগাজিনকে টেইলরের পাল্টা প্রশ্ন,...</h4>
                                <p className="text-xs">৩৩ বসন্ত পেরিয়ে জীবনের সবচেয়ে বড় সফলতাগুলো ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center gap-4">
                            <div className="h-[100px] w-[200px] rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover" src={image4} alt="image" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">রাশিয়ায় প্রেসিডেন্ট নির্বাচনের তারিখ ঘোষণা</h4>
                                <p className="text-xs">রাশিয়ায় প্রেসিডেন্ট নির্বাচনের তারিখ ঘোষণা করা হয়েছে। ২০২৪ সালের ১৭ মার্চ দেশটিতে ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center gap-4">
                            <div className="h-[100px] w-[200px] rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover" src={image3} alt="image" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">সাকিব কেন এমপি হতে চান</h4>
                                <p className="text-xs">রাজনীতিবিদদের পক্ষে মানুষের সঙ্গে চলা ও দেশসেবার সুযোগ সবচেয়ে বেশি। যতই বিতর্ক থাকুক...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center gap-4">
                            <div className="h-[100px] w-[200px] rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover" src={image5} alt="image" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">বাছাইয়ে বৈধ হওয়া প্রার্থীর বিরুদ্ধেও আপিল হচ্ছে</h4>
                                <p className="text-xs">দ্বাদশ জাতীয় সংসদ নির্বাচনে মনোনয়নপত্র বাছাইয়ে রিটার্নিং কর্মকর্তাদের সিদ্ধান্তের ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    );
};

export default SlideBar;