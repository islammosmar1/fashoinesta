import { Link } from "react-router-dom";
import DressCard from "./DressCard";
import { products } from "@/data/products";

const FeaturedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12" dir="rtl">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase font-cairo">تشكيلتنا المميزة</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
            أحدث الوصولات
          </h2>
          <div className="w-16 h-0.5 bg-gradient-gold mx-auto mt-4" />
        </div>

        {/* Grid - 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((dress, idx) => (
            <div
              key={dress.id}
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <Link to={`/product/${dress.id}`}>
                <DressCard
                  image={dress.image}
                  name={dress.name}
                  price={dress.price}
                  originalPrice={dress.originalPrice}
                  badge={dress.badge}
                  isRental={dress.isRental}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            عرض جميع الفساتين
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
