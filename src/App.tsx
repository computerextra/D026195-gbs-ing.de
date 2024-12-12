import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image1 from "@/assets/GBS Broschüre 2024-1.webp";
import Image2 from "@/assets/GBS Broschüre 2024-2.webp";
import Image3 from "@/assets/GBS Broschüre 2024-3.webp";

function App() {
  return (
    <>
      <div className="max-w-[90vw] mx-auto mt-14">
        <Carousel
          // setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-[90vw]"
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src={Image1}
                alt={""}
                className="object-contain mx-auto rounded-xl max-h-[85vh] w-auto"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={Image2}
                alt={""}
                className="object-contain mx-auto rounded-xl max-h-[85vh] w-auto"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={Image3}
                alt={""}
                className="object-contain mx-auto rounded-xl max-h-[85vh] w-auto"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default App;
