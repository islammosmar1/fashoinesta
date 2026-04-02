import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16" id="contact">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-10" dir="rtl">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Fashioni<span className="text-gradient-gold">sta</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-cairo">
              وجهتكِ الأولى للفساتين الفاخرة في فلسطين. بيع وإيجار أرقى التصاميم.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, MessageCircle].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-cairo">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["فساتين للبيع", "فساتين للإيجار", "العروض الحالية", "جدول المقاسات", "سياسة الإرجاع"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4 font-cairo">عن فاشينيستا</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["قصتنا", "فريق العمل", "المدونة", "الأسئلة الشائعة"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 font-cairo">تواصلي معنا</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>فلسطين</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span dir="ltr">+970 xxx xxx xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@fashionista.ps</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          <p className="font-cairo">
            © 2026 Fashionista. تصميم{" "}
            <span className="text-primary">Islam Mosmar</span> — فلسطين
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
