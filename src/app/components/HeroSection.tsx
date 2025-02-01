import { Carousel, CarouselButtons, CarouselControl, CarouselIndicators, CarouselItem, CarouselNextButton, CarouselPrevButton, CarouselSlides } from 'keep-react';
import Image from 'next/image';

const bannerImg = [
  '/assets/images/banner/1.jpg',
  '/assets/images/banner/2.jpg',
  '/assets/images/banner/3.jpg',
  '/assets/images/banner/4.jpg',
  '/assets/images/banner/5.jpg',
  '/assets/images/banner/6.jpg',
];

export default function HeroSection() {
  return (
    <Carousel className="container mx-auto">
      <CarouselSlides>
        {bannerImg.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="flex h-[400px] items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900 overflow-hidden">
              <Image src={slide} alt={`Slide ${index + 1}`} width={1200} height={600} className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  );
}
