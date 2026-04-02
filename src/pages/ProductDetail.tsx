import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Heart, ShoppingBag, Star, Minus, Plus, ChevronLeft, Ruler, Info, Truck, RotateCcw } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DressCard from "@/components/DressCard";

const sizeChart = [
  { size: "S", bust: "84-88", waist: "64-68", hips: "90-94" },
  { size: "M", bust: "88-92", waist: "68-72", hips: "94-98" },
  { size: "L", bust: "92-96", waist: "72-76", hips: "98-102" },
  { size: "XL", bust: "96-100", waist: "76-80", hips: "102-106" },
  { size: "XXL", bust: "100-104", waist: "80-84", hips: "106-110" },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">المنتج غير موجود</h2>
          <Link to="/" className="text-primary hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4" dir="rtl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground font-cairo">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-24 md:w-24 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === idx ? "border-primary shadow-elegant" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" width={96} height={112} />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative rounded-2xl overflow-hidden bg-secondary aspect-[3/4]">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  width={600}
                  height={800}
                />
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-gradient-gold text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                )}
                {product.isRental && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                    للإيجار
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div dir="rtl" className="flex flex-col">
              <span className="text-gold text-sm font-semibold uppercase tracking-wider font-cairo">{product.category}</span>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-cairo">
                  ({product.reviews} تقييم)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 font-cairo">
                {product.description}
              </p>

              {/* Fabric */}
              <div className="flex items-center gap-2 mb-6 text-sm font-cairo">
                <Info className="w-4 h-4 text-gold" />
                <span className="text-muted-foreground">القماش:</span>
                <span className="text-foreground font-medium">{product.fabric}</span>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3 font-cairo">الألوان المتاحة</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="px-4 py-1.5 rounded-full border border-border text-sm text-foreground hover:border-primary hover:bg-pink-light transition-all cursor-pointer font-cairo"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-foreground font-cairo">اختاري المقاس</h3>
                  <button
                    onClick={() => setShowSizeChart(!showSizeChart)}
                    className="flex items-center gap-1 text-sm text-primary hover:underline font-cairo"
                  >
                    <Ruler className="w-4 h-4" />
                    جدول المقاسات
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-lg border-2 text-sm font-bold transition-all duration-200 ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Chart */}
              {showSizeChart && (
                <div className="mb-6 bg-secondary rounded-xl p-4 animate-fade-in">
                  <h4 className="font-bold text-foreground mb-3 font-cairo text-sm">جدول المقاسات (سم)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-cairo">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-2 px-3 text-right text-muted-foreground font-medium">المقاس</th>
                          <th className="py-2 px-3 text-right text-muted-foreground font-medium">الصدر</th>
                          <th className="py-2 px-3 text-right text-muted-foreground font-medium">الخصر</th>
                          <th className="py-2 px-3 text-right text-muted-foreground font-medium">الأرداف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sizeChart.map((row) => (
                          <tr key={row.size} className="border-b border-border/50">
                            <td className="py-2 px-3 font-bold text-foreground">{row.size}</td>
                            <td className="py-2 px-3 text-muted-foreground">{row.bust}</td>
                            <td className="py-2 px-3 text-muted-foreground">{row.waist}</td>
                            <td className="py-2 px-3 text-muted-foreground">{row.hips}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground mb-3 font-cairo">الكمية</h3>
                <div className="flex items-center gap-1 border border-border rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors rounded-r-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors rounded-l-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-gold text-accent-foreground font-bold text-base gap-2 shadow-gold hover:opacity-90 transition-opacity h-14"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {product.isRental ? "استأجري الآن" : "أضيفي للسلة"}
                </Button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                    liked ? "border-primary bg-pink-light" : "border-border hover:border-primary"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                </button>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                  <Truck className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-xs text-muted-foreground font-cairo">توصيل لجميع المدن</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                  <RotateCcw className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-xs text-muted-foreground font-cairo">إرجاع خلال 7 أيام</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-16 bg-gradient-pink">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <div className="text-center mb-10" dir="rtl">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground">قد يعجبكِ أيضاً</h2>
              <div className="w-12 h-0.5 bg-gradient-gold mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((dress) => (
                <Link key={dress.id} to={`/product/${dress.id}`}>
                  <DressCard
                    image={dress.image}
                    name={dress.name}
                    price={dress.price}
                    originalPrice={dress.originalPrice}
                    badge={dress.badge}
                    isRental={dress.isRental}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
