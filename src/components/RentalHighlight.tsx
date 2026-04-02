import { Search, CalendarDays, CreditCard, Truck } from "lucide-react";
import featuredImg from "@/assets/featured-dresses.jpg";

const steps = [
  { icon: Search, title: "اختاري", desc: "تصفحي مجموعتنا الواسعة" },
  { icon: CalendarDays, title: "حددي الموعد", desc: "اختاري تاريخ المناسبة" },
  { icon: CreditCard, title: "ادفعي", desc: "خيارات دفع آمنة ومتعددة" },
  { icon: Truck, title: "استلمي", desc: "توصيل أو استلام من المتجر" },
];

const RentalHighlight = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-pink" id="rent">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={featuredImg}
              alt="فساتين للإيجار"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-2xl shadow-elegant w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold">
              <div className="text-center text-accent-foreground">
                <span className="text-2xl font-bold block">50%</span>
                <span className="text-xs">خصم</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div dir="rtl">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase font-cairo">خدمة الإيجار</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              استأجري فستان أحلامكِ
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed font-cairo">
              لا داعي لشراء فستان ترتدينه مرة واحدة. استأجري أفخم الفساتين بأسعار معقولة واستمتعي بإطلالة ساحرة في كل مناسبة.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-2 gap-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-4 flex items-start gap-3 shadow-sm hover:shadow-elegant transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-light flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm font-cairo">{step.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalHighlight;
