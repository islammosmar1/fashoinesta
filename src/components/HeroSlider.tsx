import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: hero1,
    title: "أناقتكِ تبدأ من هنا",
    subtitle: "اكتشفي أحدث تشكيلات الفساتين الفاخرة",
    cta: "تسوّقي الآن",
  },
  {
    image: hero2,
    title: "استئجار الفخامة",
    subtitle: "فساتين راقية للإيجار بأسعار مميزة",
    cta: "استعرضي المجموعة",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center" dir="rtl">
            <div className="max-w-2xl px-6 animate-fade-in">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-cairo">
                {slide.subtitle}
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-gold text-accent-foreground font-semibold px-8 py-3 text-base shadow-gold hover:opacity-90 transition-opacity"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm flex items-center justify-center hover:bg-card/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-gold w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
