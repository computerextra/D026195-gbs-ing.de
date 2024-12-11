import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Image1 from "@/assets/Green Building Solutions - 1.webp";
import Image2 from "@/assets/Green Building Solutions - 2.webp";
import Image3 from "@/assets/Green Building Solutions - 3.webp";
import { ImageDialog } from "./components/ImageDialog";
import Autoplay from "embla-carousel-autoplay";

function App() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <h1 className="my-20 text-center">Green Building Solutions GmbH</h1>
      <div className="mx-auto max-w-[60%]">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-auto max-h-[50vh]"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="max-h-[50vh]">
                <ImageDialog alt="" src={Image1} />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="max-h-[50vh]">
                <ImageDialog alt="" src={Image2} />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="max-h-[50vh]">
                <ImageDialog alt="" src={Image3} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-sm text-center text-background">
          Bild {current} von {count}
        </div>
      </div>
    </>
  );
}

export default App;
