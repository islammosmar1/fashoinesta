import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";
import dress5 from "@/assets/dress-5.jpg";
import dress6 from "@/assets/dress-6.jpg";
import dress7 from "@/assets/dress-7.jpg";
import dress8 from "@/assets/dress-8.jpg";
import dress9 from "@/assets/dress-9.jpg";
import dress10 from "@/assets/dress-10.jpg";
import dress11 from "@/assets/dress-11.jpg";
import dress12 from "@/assets/dress-12.jpg";

export interface Product {
  id: string;
  image: string;
  images: string[];
  name: string;
  price: string;
  priceNum: number;
  originalPrice?: string;
  badge?: string;
  isRental?: boolean;
  description: string;
  fabric: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    image: dress1,
    images: [dress1, dress2, dress3],
    name: "فستان سهرة بورغندي فاخر",
    price: "₪ 1,200",
    priceNum: 1200,
    badge: "جديد",
    description: "فستان سهرة أنيق بلون بورغندي غامق مصنوع من أجود أنواع الساتان الإيطالي. تصميم عصري يجمع بين الفخامة والبساطة، مثالي لحفلات الزفاف والمناسبات الخاصة.",
    fabric: "ساتان إيطالي",
    colors: ["بورغندي", "أسود", "كحلي"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 24,
    category: "سهرة",
  },
  {
    id: "2",
    image: dress2,
    images: [dress2, dress1, dress10],
    name: "فستان ساتان وردي أنيق",
    price: "₪ 850",
    priceNum: 850,
    originalPrice: "₪ 1,100",
    description: "فستان وردي ناعم بقصة إيه لاين رومانسية. مصنوع من الساتان الفاخر مع أشرطة رفيعة أنيقة. مثالي للسهرات والحفلات.",
    fabric: "ساتان فاخر",
    colors: ["وردي", "شامبين", "أبيض"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 18,
    category: "حفلات",
  },
  {
    id: "3",
    image: dress3,
    images: [dress3, dress9, dress11],
    name: "فستان مطرز كحلي ملكي",
    price: "₪ 1,500",
    priceNum: 1500,
    description: "فستان مطرز يدوياً بأدق التفاصيل. لون كحلي ملكي مع تطريزات ساحرة. تصميم كلاسيكي يعكس الذوق الرفيع.",
    fabric: "تول مطرز",
    colors: ["كحلي", "أسود"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 32,
    category: "سهرة",
  },
  {
    id: "4",
    image: dress4,
    images: [dress4, dress11, dress1],
    name: "فستان أخضر زمردي مخملي",
    price: "₪ 950",
    priceNum: 950,
    isRental: true,
    description: "فستان مخملي بلون أخضر زمردي فاخر. قصة مذهلة تبرز الأنوثة والأناقة. متاح للإيجار بسعر مميز.",
    fabric: "مخمل فاخر",
    colors: ["أخضر زمردي", "بورغندي"],
    sizes: ["S", "M", "L"],
    rating: 4.7,
    reviews: 15,
    category: "إيجار",
  },
  {
    id: "5",
    image: dress5,
    images: [dress5, dress12, dress8],
    name: "فستان ذهبي لامع للحفلات",
    price: "₪ 1,350",
    priceNum: 1350,
    badge: "الأكثر مبيعاً",
    description: "فستان ذهبي مرصع بالترتر اللامع. تصميم ساحر يخطف الأنظار في كل مناسبة. مثالي للحفلات الراقية.",
    fabric: "ترتر على تول",
    colors: ["ذهبي", "فضي", "شامبين"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.9,
    reviews: 45,
    category: "حفلات",
  },
  {
    id: "6",
    image: dress6,
    images: [dress6, dress1, dress10],
    name: "فستان أحمر كلاسيكي",
    price: "₪ 780",
    priceNum: 780,
    originalPrice: "₪ 1,000",
    description: "فستان أحمر كلاسيكي بقصة أوف شولدر أنيقة. تصميم خالد لا يخرج عن الموضة. مصنوع من الكريب الفاخر.",
    fabric: "كريب فاخر",
    colors: ["أحمر", "أسود", "كحلي"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 22,
    category: "كلاسيك",
  },
  {
    id: "7",
    image: dress7,
    images: [dress7, dress2, dress8],
    name: "فستان تول لافندر أميري",
    price: "₪ 1,100",
    priceNum: 1100,
    badge: "جديد",
    description: "فستان تول بلون لافندر ناعم بتصميم أميري ساحر. طبقات من التول الناعم تمنحكِ إطلالة أسطورية.",
    fabric: "تول فاخر",
    colors: ["لافندر", "وردي فاتح", "أبيض"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 12,
    category: "أعراس",
  },
  {
    id: "8",
    image: dress8,
    images: [dress8, dress7, dress2],
    name: "فستان دانتيل أبيض عاجي",
    price: "₪ 1,800",
    priceNum: 1800,
    description: "فستان دانتيل أبيض عاجي بتفاصيل يدوية رائعة. مثالي للعروس العصرية التي تبحث عن الأناقة والتميز.",
    fabric: "دانتيل فرنسي",
    colors: ["أبيض عاجي", "أبيض"],
    sizes: ["S", "M", "L"],
    rating: 5.0,
    reviews: 8,
    category: "أعراس",
  },
  {
    id: "9",
    image: dress9,
    images: [dress9, dress3, dress12],
    name: "فستان أسود مطرز بالخرز",
    price: "₪ 1,400",
    priceNum: 1400,
    isRental: true,
    description: "فستان أسود فاخر مزين بالخرز اللامع. تصميم ميرميد أنيق يمنحكِ إطلالة هوليوودية. متاح للإيجار.",
    fabric: "تول مطرز بالخرز",
    colors: ["أسود"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 19,
    category: "إيجار",
  },
  {
    id: "10",
    image: dress10,
    images: [dress10, dress6, dress2],
    name: "فستان شيفون مرجاني رومانسي",
    price: "₪ 680",
    priceNum: 680,
    originalPrice: "₪ 900",
    description: "فستان شيفون بلون مرجاني دافئ مع أكمام فراشة أنيقة. خفيف ومريح مع لمسة رومانسية ساحرة.",
    fabric: "شيفون فاخر",
    colors: ["مرجاني", "وردي", "أحمر فاتح"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.4,
    reviews: 27,
    category: "كاجوال",
  },
  {
    id: "11",
    image: dress11,
    images: [dress11, dress3, dress4],
    name: "فستان ساتان أزرق ملكي",
    price: "₪ 1,250",
    priceNum: 1250,
    badge: "حصري",
    description: "فستان ساتان بلون أزرق ملكي ساحر. قصة ميرميد كلاسيكية تبرز جمال القوام. حصري لدى فاشينيستا.",
    fabric: "ساتان دوقة",
    colors: ["أزرق ملكي", "كحلي"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 14,
    category: "سهرة",
  },
  {
    id: "12",
    image: dress12,
    images: [dress12, dress5, dress9],
    name: "فستان كوكتيل فضي لامع",
    price: "₪ 750",
    priceNum: 750,
    isRental: true,
    description: "فستان كوكتيل قصير بترتر فضي لامع. مثالي للحفلات المسائية والمناسبات الخاصة. متاح للإيجار.",
    fabric: "ترتر على ساتان",
    colors: ["فضي", "ذهبي"],
    sizes: ["S", "M", "L"],
    rating: 4.6,
    reviews: 20,
    category: "إيجار",
  },
];
