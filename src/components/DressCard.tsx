import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface DressCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  isRental?: boolean;
}

const DressCard = ({ image, name, price, originalPrice, badge, isRental }: DressCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={600}
          height={800}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-gradient-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        {isRental && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            للإيجار
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button className="bg-card text-foreground px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-elegant hover:bg-primary hover:text-primary-foreground transition-colors">
            <ShoppingBag className="w-4 h-4" />
            أضيفي للسلة
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4" dir="rtl">
        <h3 className="font-cairo font-semibold text-foreground text-sm mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-primary text-lg">{price}</span>
          {originalPrice && (
            <span className="text-muted-foreground text-sm line-through">{originalPrice}</span>
          )}
        </div>
      </div>

      {/* Favorite */}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
        style={{ right: badge ? "auto" : undefined, left: badge ? "12px" : undefined }}
      >
        <Heart
          className={`w-4 h-4 transition-colors ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      </button>
    </div>
  );
};

export default DressCard;
