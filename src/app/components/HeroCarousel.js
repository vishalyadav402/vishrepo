import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import {
  Box,
  Skeleton,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";


const data = [
  {
    id:0,
    image:'/images/carousel/',
    alts:''
  }
]

const HeroCarousel = () => {

  const router = useRouter();
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState([]);


  return (
    <Box
      sx={{
        width: "100vw",
        height: { md: "450px", sm: "250px", xs: "155px" },
        // border: "1px solid red",
      }}
    >
      <Swiper
        cssMode={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {isloading && (
          <Box
            // sizes="(max-width:768px) 100vw, 700px"
            style={{
              width: "100vw",
              height: "auto",
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{
                height: { md: "450px", sm: "250px", xs: "155px" },
              }}
              alt="hero-image"
            />
          </Box>
        )}
        <Stack>
          {data &&
            data.map((item, key) => (
              <SwiperSlide key={key}>
                <Image
                  preload
                  loading="eager"
                  src={item && item.image}
                  alt={item && item.alts}
                  // sizes="(max-width:768px) 100vw, 700px"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  layout="fill"
                  objectFit="contain"
                />
              </SwiperSlide>
            ))}
        </Stack>
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
