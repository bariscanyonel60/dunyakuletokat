/**
 * Dünya Kule — merkezi içerik katmanı.
 * Gerçek değer bekleyen alanlar `TODO` ile işaretlenmiştir.
 * Operatör / müşteri marka adları kullanılmaz.
 */

export const company = {
  legalName: "DÜNYA KULE HİZMETLERİ SAN. VE TİC. LTD. ŞTİ.",
  brandName: "Dünya Kule",
  shortName: "Dünya Kule",
  tagline: "Sinyalin ulaştığı her noktada, sahada biz varız.",
  activity: "Telekomünikasyon altyapısı: GSM baz istasyonu kurulum, montaj ve bakım hizmetleri.",
  address: {
    line1: "Perakende Mah. Mehmet Aksu Cad. 3. Sok. No: 10",
    line2: "Okur Apt. B Blok, Kat: 6, Daire: 13",
    city: "Tokat Merkez / Tokat",
    postalCode: "60100",
    country: "Türkiye",
    full: "Perakende Mah. Mehmet Aksu Cad. 3. Sok. No: 10, Okur Apt. B Blok, Kat: 6, Daire: 13, Tokat Merkez / Tokat (60100)",
  },
  phone: {
    display: "0356 228 60 50",
    tel: "+903562286050",
  },
  // TODO: gerçek e-posta girilecek
  email: "[e-posta@ornek.com]",
  // TODO: gerçek WhatsApp numarası girilecek (ülke koduyla, örn. 905xxxxxxxxx)
  whatsapp: "[905XXXXXXXXX]",
  // TODO: gerçek domain girilecek
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ornek-domain.com",
  mapsEmbedQuery: "Perakende+Mah.+Mehmet+Aksu+Cad.+3.+Sok.+No:+10,+Tokat+Merkez",
  // TODO: gerçek çalışma saatleri girilecek
  workingHours: {
    weekdays: "Pazartesi – Cuma: [XX:XX – XX:XX]",
    saturday: "Cumartesi: [XX:XX – XX:XX] / Kapalı",
    sunday: "Pazar: Kapalı",
    note: "Acil saha müdahalesi için lütfen telefon ile iletişime geçin. // TODO: acil hat politikası netleştirilecek",
  },
} as const;

/** İstatistikler — uydurulmuş gerçek değer yok; yer tutucu. */
export const stats = [
  {
    id: "experience",
    // TODO: gerçek değer girilecek
    value: "XX",
    suffix: "+",
    label: "Yıl Deneyim",
    numericPlaceholder: 0,
  },
  {
    id: "sites",
    // TODO: gerçek değer girilecek
    value: "XX",
    suffix: "+",
    label: "Tamamlanan Saha",
    numericPlaceholder: 0,
  },
  {
    id: "region",
    // TODO: gerçek değer girilecek
    value: "XX",
    suffix: "+",
    label: "Hizmet Bölgesi",
    numericPlaceholder: 0,
  },
  {
    id: "team",
    // TODO: gerçek değer girilecek
    value: "XX",
    suffix: "+",
    label: "Saha Ekibi",
    numericPlaceholder: 0,
  },
] as const;

export const navigation = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/kariyer", label: "Kariyer" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export type ServiceSlug =
  | "gsm-baz-istasyonu-kurulumu"
  | "anten-ve-rf-ekipman-montaji"
  | "kule-ve-direk-montaji"
  | "periyodik-ve-ariza-bakimi"
  | "mikrodalga-link-ve-fiber"
  | "enerji-ve-guc-sistemleri"
  | "site-survey-saha-kesfi"
  | "sokum-tasima-ve-yenileme";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  scope: string[];
  process: string[];
  approach: string[];
  faqs: { question: string; answer: string }[];
  icon: "tower" | "antenna" | "mount" | "wrench" | "link" | "power" | "survey" | "swap";
};

export const services: Service[] = [
  {
    slug: "gsm-baz-istasyonu-kurulumu",
    title: "GSM Baz İstasyonu Kurulumu",
    shortTitle: "Baz İstasyonu Kurulumu",
    summary:
      "Saha hazırlığından ekipman montajına ve devreye almaya kadar uçtan uca baz istasyonu kurulumu.",
    description:
      "Tokat merkezli ekibimiz; çatı ve arazi tipi sahalarda GSM baz istasyonu kurulum süreçlerini planlı, ölçülebilir ve iş güvenliği öncelikli biçimde yürütür.",
    scope: [
      "Saha erişim ve lojistik koordinasyonu",
      "Kabin, rack ve aktif ekipman yerleşimi",
      "Anten, feeder ve grounding uygulamaları",
      "Test, ölçüm ve iş teslim dokümantasyonu",
    ],
    process: [
      "Keşif ve risk değerlendirmesi",
      "Montaj planı ve ekipman kontrolü",
      "Kurulum ve kablolama",
      "RF / sistem testleri",
      "Teslim ve raporlama",
    ],
    approach: [
      "İş programına uygun saha disiplini",
      "İSG prosedürlerine uyum",
      "Net iletişim ve ilerleme kaydı",
    ],
    faqs: [
      {
        question: "Kurulum süresi neye göre değişir?",
        answer:
          "Saha tipi, erişim koşulları, ekipman hazırlığı ve hava şartlarına göre planlanır. Net süre teklif aşamasında paylaşılır.",
      },
      {
        question: "Dokümantasyon sağlıyor musunuz?",
        answer:
          "Evet. İş bitiminde montaj ve test kayıtları, fotoğraf ve teslim formları düzenli olarak iletilir.",
      },
    ],
    icon: "tower",
  },
  {
    slug: "anten-ve-rf-ekipman-montaji",
    title: "Anten ve RF Ekipman Montajı",
    shortTitle: "Anten & RF Montajı",
    summary:
      "Anten, RRU/RRH, feeder ve RF bağlantılarının doğru hizalama ve grounding ile montajı.",
    description:
      "Frekans ve sektör planına uygun anten montajı; RF ekipmanların güvenli, ölçülebilir ve standartlara uygun şekilde sahaya entegre edilmesi.",
    scope: [
      "Anten ve braket montajı",
      "Azimut / tilt ayarları",
      "Feeder, jumper ve connector uygulamaları",
      "PIM / VSWR odaklı dikkatli işçilik",
    ],
    process: [
      "Plan ve ekipman doğrulama",
      "Yüksekte çalışma hazırlığı",
      "Montaj ve hizalama",
      "Ölçüm ve kayıt",
    ],
    approach: [
      "Hassas hizalama disiplini",
      "Kablo yönetimi ve etiketleme",
      "Güvenli yüksekte çalışma",
    ],
    faqs: [
      {
        question: "Mevcut sahada ek anten montajı yapılabilir mi?",
        answer:
          "Saha keşfi sonrası yapısal yük, frekans planı ve erişim koşulları değerlendirilerek planlanır.",
      },
    ],
    icon: "antenna",
  },
  {
    slug: "kule-ve-direk-montaji",
    title: "Kule ve Direk Montajı (Çatı / Arazi)",
    shortTitle: "Kule & Direk Montajı",
    summary: "Çatı tipi ve arazi tipi kule, direk ve taşıyıcı sistemlerin güvenli montajı.",
    description:
      "Taşıyıcı yapı montajında statik gerekliliklere, ankrajlara ve yüksekte çalışma kurallarına uygun saha uygulaması.",
    scope: [
      "Çatı tipi direk / pole montajı",
      "Arazi tipi kule / mast uygulamaları",
      "Ankraj, flanş ve bağlantı kontrolü",
      "Güvenlik ve düşme önleme sistemleri ile çalışma",
    ],
    process: [
      "Saha ve zemin/çatı kontrolü",
      "Montaj sırası planı",
      "Kademeli montaj",
      "Sıkma torku ve kontrol listesi",
    ],
    approach: ["Yapısal güvenlik önceliği", "Kontrol listeli montaj", "Fotoğraflı ilerleme kaydı"],
    faqs: [
      {
        question: "Çatı tipi ve arazi tipi farkı nedir?",
        answer:
          "Çatı tipi uygulamalarda yapısal yük ve çatı erişimi; arazi tipinde zemin, temel ve vinç/erişim lojistiği öne çıkar.",
      },
    ],
    icon: "mount",
  },
  {
    slug: "periyodik-ve-ariza-bakimi",
    title: "Periyodik ve Arıza Bakımı",
    shortTitle: "Bakım & Arıza",
    summary: "Planlı periyodik bakım ve arıza durumunda hızlı, raporlamalı saha müdahalesi.",
    description:
      "Saha sürekliliği için periyodik kontroller, arıza giderme ve net raporlama ile operasyonel destek.",
    scope: [
      "Periyodik saha kontrolü",
      "Arıza tespiti ve müdahale",
      "Yedek parça / ekipman değişimi desteği",
      "Bakım raporu ve fotoğraf arşivi",
    ],
    process: ["Talep / alarm kaydı", "Saha planlama", "Müdahale", "Doğrulama ve rapor"],
    approach: [
      "Önceliklendirilmiş müdahale",
      "Net kök neden kaydı",
      "Tekrarlayan arızalarda iyileştirme önerisi",
    ],
    faqs: [
      {
        question: "Acil arızaya ne kadar sürede yanıt veriyorsunuz?",
        answer:
          // TODO: gerçek SLA girilecek
          "Yanıt ve sahaya varış süreleri bölge ve önceliğe göre belirlenir. [XX saat / SLA — TODO]",
      },
    ],
    icon: "wrench",
  },
  {
    slug: "mikrodalga-link-ve-fiber",
    title: "Mikrodalga Link ve Fiber Bağlantı Çözümleri",
    shortTitle: "MW Link & Fiber",
    summary: "Mikrodalga link anten montajı ve fiber bağlantı hazırlığı / saha uygulamaları.",
    description:
      "Backhaul ihtiyaçları için MW anten hizalama ve fiber saha uygulamalarında dikkatli, ölçülebilir işçilik.",
    scope: [
      "MW anten montajı ve alignment",
      "ODF / patch ve saha fiber uygulamaları",
      "Bağlantı doğrulama desteği",
      "Saha etiketleme ve dokümantasyon",
    ],
    process: ["Keşif ve hat planı", "Montaj", "Hizalama / test", "Teslim"],
    approach: ["Hassas alignment", "Kablo ve fiber koruma", "Ölçüm kayıtları"],
    faqs: [
      {
        question: "Fiber ve MW birlikte mi planlanır?",
        answer:
          "Proje ihtiyacına göre ayrı veya birlikte planlanabilir; keşif sonrası netleştirilir.",
      },
    ],
    icon: "link",
  },
  {
    slug: "enerji-ve-guc-sistemleri",
    title: "Enerji ve Güç Sistemleri",
    shortTitle: "Enerji & Güç",
    summary: "Doğrultucu, akü, kabin ve saha güç altyapısının montaj ve bakım desteği.",
    description:
      "Saha enerji sürekliliği için doğrultucu, akü bankosu ve kabin içi güç düzeninin güvenli kurulumu.",
    scope: [
      "Doğrultucu / rectifier montajı",
      "Akü yerleşimi ve bağlantıları",
      "Kabin içi güç düzeni",
      "Güvenli enerji kesme / kilitleme disiplini",
    ],
    process: [
      "Mevcut enerji durumu kontrolü",
      "Montaj planı",
      "Kurulum",
      "Gerilim / süreklilik kontrolü",
    ],
    approach: ["Elektrik güvenliği önceliği", "Etiketleme ve izolasyon", "Ölçümle doğrulama"],
    faqs: [
      {
        question: "Akü değişimi yapıyor musunuz?",
        answer:
          "Evet. Planlı veya arıza kaynaklı akü değişimlerinde saha uygulaması ve bağlantı kontrolü sağlanır.",
      },
    ],
    icon: "power",
  },
  {
    slug: "site-survey-saha-kesfi",
    title: "Site Survey / Saha Keşfi",
    shortTitle: "Site Survey",
    summary: "Kurulum öncesi erişim, yapısal durum, RF ve lojistik risklerini içeren saha keşfi.",
    description:
      "Doğru planlama için sahayı yerinde inceleyip net, fotoğraflı ve uygulanabilir keşif çıktısı üretiriz.",
    scope: [
      "Erişim ve lojistik değerlendirmesi",
      "Yapısal / çatı / zemin gözlemi",
      "RF ve taşıyıcı uygunluk notları",
      "Risk ve öneri raporu",
    ],
    process: ["Brief alma", "Saha ziyareti", "Ölçüm / fotoğraf", "Keşif raporu"],
    approach: [
      "Uygulanabilir bulgular",
      "Riskleri erken görünür kılma",
      "Kurulum ekibiyle aynı dil",
    ],
    faqs: [
      {
        question: "Keşif raporu ne içerir?",
        answer:
          "Erişim, riskler, montaj notları, fotoğraflar ve önerilen iş sırası. Format proje ihtiyacına göre uyarlanır.",
      },
    ],
    icon: "survey",
  },
  {
    slug: "sokum-tasima-ve-yenileme",
    title: "Söküm, Taşıma ve Yenileme (Swap) İşleri",
    shortTitle: "Söküm & Swap",
    summary:
      "Mevcut ekipmanın sökümü, güvenli taşıma ve yeni nesil ekipmanla yenileme (swap) uygulamaları.",
    description:
      "Kesinti riskini yöneterek mevcut saha ekipmanlarının söküm, taşıma ve swap süreçlerini disiplinli şekilde yürütürüz.",
    scope: [
      "Planlı söküm",
      "Ekipman korumalı taşıma",
      "Yeni ekipman montajı (swap)",
      "Eski/yeni envanter kaydı",
    ],
    process: ["Envanter ve plan", "Söküm", "Montaj / swap", "Test ve teslim"],
    approach: ["Kesinti penceresine uyum", "Ekipman hasar önleme", "İzlenebilir envanter"],
    faqs: [
      {
        question: "Swap sırasında kesinti olur mu?",
        answer:
          "İş programı ve saha koşullarına bağlıdır. Planlama aşamasında kesinti penceresi netleştirilir.",
      },
    ],
    icon: "swap",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Keşif / Site Survey",
    description: "Saha koşulları, erişim ve riskler yerinde değerlendirilir.",
  },
  {
    step: "02",
    title: "Projelendirme",
    description: "İş sırası, ekipman ve güvenlik planı netleştirilir.",
  },
  {
    step: "03",
    title: "Kurulum & Montaj",
    description: "Planlı montaj; İSG kuralları ve kontrol listeleriyle yürütülür.",
  },
  {
    step: "04",
    title: "Test & Devreye Alma",
    description: "Ölçüm, doğrulama ve iş teslim dokümantasyonu tamamlanır.",
  },
  {
    step: "05",
    title: "Periyodik Bakım",
    description: "Süreklilik için planlı bakım ve arıza müdahalesi sağlanır.",
  },
] as const;

export const whyUs = [
  {
    title: "İSG odaklı çalışma",
    description: "Yüksekte çalışma, KKD ve saha risk değerlendirmesi işin ayrılmaz parçasıdır.",
  },
  {
    title: "Deneyimli saha ekibi",
    description: "Telekom altyapı sahasında disiplinli, uygulamaya odaklı ekip yaklaşımı.",
  },
  {
    title: "Hızlı müdahale",
    description: "Planlı işler ve arıza çağrıları için net iletişim ve önceliklendirme.",
  },
  {
    title: "Raporlama ve dokümantasyon",
    description: "Fotoğraf, test kaydı ve teslim formlarıyla izlenebilir iş çıktısı.",
  },
] as const;

export const isg = {
  title: "İş Sağlığı ve Güvenliği",
  intro:
    "Yüksekte çalışma gerektiren telekom sahalarında güvenlik, hızın önündedir. Ekipman, eğitim ve prosedürlerle riskleri yönetiriz.",
  points: [
    {
      title: "Yüksekte çalışma",
      description: "Düşme önleme sistemleri, güvenli erişim ve saha risk analizi ile çalışma.",
    },
    {
      title: "KKD",
      description: "İşin niteliğine uygun kişisel koruyucu donanım kullanımı zorunludur.",
    },
    {
      title: "Eğitimli ekip",
      description:
        // TODO: gerçek sertifika / eğitim listesi girilecek
        "Saha ekibi için gerekli eğitim ve yeterlilikler [sertifika listesi — TODO].",
    },
  ],
  // TODO: gerçek sertifikalar girilecek
  certificates: [
    "[İSG Sertifikası — TODO]",
    "[Yüksekte Çalışma — TODO]",
    "[İlk Yardım — TODO]",
    "[Diğer — TODO]",
  ],
} as const;

export type ProjectCategory = "kurulum" | "bakim" | "montaj";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  summary: string;
  // TODO: gerçek görseller public/images altına eklenecek
  image: string;
  year: string;
};

/** Referans / proje kartları — nötr yer tutucular; operatör adı yok. */
export const projects: Project[] = [
  {
    id: "p-01",
    // TODO: gerçek proje bilgisi girilecek
    title: "Arazi Tipi Saha Kurulumu — [Bölge]",
    category: "kurulum",
    location: "[İl / İlçe — TODO]",
    summary: "Baz istasyonu kurulumu ve kabin yerleşimi. [Detay — TODO]",
    image: "/images/saha-kurulum-01.jpg",
    year: "[YYYY]",
  },
  {
    id: "p-02",
    title: "Çatı Tipi Anten Montajı — [Bölge]",
    category: "montaj",
    location: "[İl / İlçe — TODO]",
    summary: "Anten ve RF ekipman montajı. [Detay — TODO]",
    image: "/images/anten-montaj-01.jpg",
    year: "[YYYY]",
  },
  {
    id: "p-03",
    title: "Periyodik Bakım Programı — [Bölge]",
    category: "bakim",
    location: "[İl / İlçe — TODO]",
    summary: "Planlı saha bakım ve raporlama. [Detay — TODO]",
    image: "/images/bakim-saha-01.jpg",
    year: "[YYYY]",
  },
  {
    id: "p-04",
    title: "Enerji Sistemi Yenileme — [Bölge]",
    category: "montaj",
    location: "[İl / İlçe — TODO]",
    summary: "Doğrultucu ve akü uygulamaları. [Detay — TODO]",
    image: "/images/enerji-kabin-01.jpg",
    year: "[YYYY]",
  },
  {
    id: "p-05",
    title: "Swap / Yenileme İşi — [Bölge]",
    category: "kurulum",
    location: "[İl / İlçe — TODO]",
    summary: "Ekipman söküm ve yeni montaj. [Detay — TODO]",
    image: "/images/swap-yenileme-01.jpg",
    year: "[YYYY]",
  },
  {
    id: "p-06",
    title: "Arıza Müdahalesi — [Bölge]",
    category: "bakim",
    location: "[İl / İlçe — TODO]",
    summary: "Saha arıza giderme ve doğrulama. [Detay — TODO]",
    image: "/images/ariza-mudahale-01.jpg",
    year: "[YYYY]",
  },
];

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "kurulum", label: "Kurulum" },
  { id: "bakim", label: "Bakım" },
  { id: "montaj", label: "Montaj" },
];

/** Hizmet bölgesi — iller yer tutucu. */
export const serviceRegion = {
  hub: "Tokat",
  mapAlt: "Türkiye haritasında Tokat saha merkezi işaretlenmiş.",
  // TODO: gerçek hizmet verilen iller girilecek
  cities: ["Tokat", "[İl 1 — TODO]", "[İl 2 — TODO]", "[İl 3 — TODO]", "[İl 4 — TODO]"],
  note: "Hizmet bölgesi proje bazlı genişletilebilir. Güncel kapsama için iletişime geçin.",
} as const;

export const about = {
  // TODO: gerçek firma hikâyesi girilecek
  story: [
    "Dünya Kule, Tokat merkezli bir telekomünikasyon altyapı firmasıdır. GSM baz istasyonu kurulum, montaj ve bakım işlerinde sahada güvenilir ve teknik olarak yetkin bir iş ortağı olmayı hedefler.",
    "[Kuruluş hikâyesi ve gelişim — TODO: gerçek metin girilecek]",
    "Çalışma kültürümüz; iş güvenliği, net iletişim, ölçülebilir çıktı ve saha disiplinine dayanır.",
  ],
  mission: "Telekom altyapı projelerinde güvenli, zamanında ve belgelenmiş saha hizmeti sunmak.",
  vision:
    // TODO: gerçek vizyon metni girilecek
    "Bölgesinde tercih edilen, İSG ve kalite standardı yüksek bir saha yüklenicisi olmak. [Vizyon detayı — TODO]",
  values: [
    {
      title: "Güvenlik",
      description: "Her işte önce insan ve saha güvenliği.",
    },
    {
      title: "Teknik yeterlilik",
      description: "Doğru montaj, ölçüm ve dokümantasyon.",
    },
    {
      title: "Şeffaflık",
      description: "Net plan, net ilerleme, net teslim.",
    },
    {
      title: "Saha disiplini",
      description: "Planlı iş programı ve izlenebilir süreç.",
    },
  ],
  teamApproach:
    "Ekibimiz keşiften teslime aynı standartla çalışır: riskleri görünür kılmak, işi doğru yapmak ve sonucu belgelemek.",
} as const;

export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  requirements: string[];
};

export const jobs: Job[] = [
  {
    id: "job-01",
    // TODO: gerçek açık pozisyonlar girilecek
    title: "Saha Teknisyeni — [Pozisyon — TODO]",
    location: "Tokat / [Bölge — TODO]",
    type: "Tam zamanlı",
    summary: "Baz istasyonu kurulum ve bakım sahalarında aktif görev. [Detay — TODO]",
    requirements: [
      "[Tecrübe / ehliyet — TODO]",
      "[Yüksekte çalışma uygunluğu — TODO]",
      "[Seyahat isteği — TODO]",
    ],
  },
  {
    id: "job-02",
    title: "RF / Montaj Teknisyeni — [Pozisyon — TODO]",
    location: "Tokat / [Bölge — TODO]",
    type: "Tam zamanlı",
    summary: "Anten ve RF ekipman montajı. [Detay — TODO]",
    requirements: ["[Teknik eğitim — TODO]", "[Saha deneyimi — TODO]", "[İSG farkındalığı — TODO]"],
  },
];

export const legal = {
  kvkkNote:
    "Bu metin bilgilendirme amaçlı bir şablondur. Yayımlanmadan önce hukuki kontrol gereklidir.",
  cookieNote:
    "Bu metin bilgilendirme amaçlı bir şablondur. Yayımlanmadan önce hukuki kontrol gereklidir.",
  kvkkTitle: "KVKK Aydınlatma Metni",
  cookieTitle: "Çerez Politikası",
  kvkkBody: [
    "DÜNYA KULE HİZMETLERİ SAN. VE TİC. LTD. ŞTİ. (“Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.",
    "İletişim ve kariyer formları aracılığıyla; ad soyad, firma, telefon, e-posta, mesaj içeriği ve başvuruya ilişkin belgeler (CV vb.) işlenebilir.",
    "İşleme amaçları: taleplerinize yanıt vermek, teklif süreçlerini yürütmek, iş başvurularını değerlendirmek ve yasal yükümlülükleri yerine getirmektir.",
    "Verileriniz, açık rızanız veya KVKK’da öngörülen diğer hukuki sebepler çerçevesinde, hizmet alınan iş ortaklarıyla sınırlı olarak paylaşılabilir.",
    "KVKK’nın 11. maddesi kapsamındaki haklarınız için [e-posta@ornek.com — TODO] adresinden bizimle iletişime geçebilirsiniz.",
    "Detaylı saklama süreleri, aktarım ve güvenlik tedbirleri hukuki danışmanlık sonrası netleştirilecektir. // TODO",
  ],
  cookieBody: [
    "Bu web sitesi, temel işlevsellik ve tercihlerinizin hatırlanması (örneğin çerez onay durumu) için gerekli çerezler kullanabilir.",
    "Zorunlu çerezler sitenin çalışması için gereklidir. Analitik veya pazarlama çerezleri kullanılacaksa ayrıca bilgilendirilecek ve gerekirse onay alınacaktır. // TODO: çerez envanteri",
    "Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz. Onay bandı üzerinden tercihlerinizi güncelleyebilirsiniz.",
    "Çerez süreleri ve üçüncü taraf araçlar listesi hukuki kontrol sonrası güncellenecektir. // TODO",
  ],
} as const;

export const seoDefaults = {
  titleTemplate: "%s | Dünya Kule",
  defaultTitle: "Dünya Kule | Baz İstasyonu Kurulum, Montaj ve Bakım — Tokat",
  description:
    "Tokat merkezli Dünya Kule: GSM baz istasyonu kurulumu, anten/RF montajı, kule montajı ve bakım hizmetleri. Güvenilir telekom altyapı saha ekibi.",
  keywords: [
    "baz istasyonu kurulumu Tokat",
    "GSM kule montajı",
    "baz istasyonu bakım",
    "telekom altyapı hizmetleri",
    "anten montajı",
    "site survey",
  ],
} as const;

export const placeholderCopy = {
  pending: "Güncellenecek",
  project: "Temsili çalışma",
} as const;

export const homeCopy = {
  servicesAll: "Tüm hizmetler",
  serviceDetails: "İncele",
  projectsAll: "Tüm projeler",
  projectCategoriesLabel: "Proje kategorileri",
  certificatesLabel: "Sertifikalar / yeterlilikler",
  heroTitle: "Sinyalin Ulaştığı Her Noktada, Sahada Biz Varız",
  heroSubtitle:
    "GSM baz istasyonu kurulum, montaj ve bakımında Tokat merkezli, İSG odaklı telekomünikasyon altyapı ekibi.",
  heroMeta: "Frekans · RF · 4G/5G",
  ctaPrimary: "Teklif Al",
  ctaSecondary: "Hizmetlerimiz",
  servicesTitle: "Hizmetlerimiz",
  servicesSubtitle: "Keşiften bakıma, sahadaki telekom altyapı ihtiyaçlarınız için.",
  processTitle: "Çalışma Sürecimiz",
  processSubtitle: "Net adımlar, ölçülebilir çıktı.",
  whyTitle: "Neden Dünya Kule?",
  whySubtitle: "Güvenilir saha uygulaması ve şeffaf iletişim.",
  projectsTitle: "Projeler / Referanslar",
  projectsSubtitle: "Örnek saha çalışmaları ve uygulama alanları.",
  regionTitle: "Hizmet Bölgesi",
  regionSubtitle: "Tokat merkezli saha operasyonu.",
  ctaBandTitle: "Projeniz için sahada yanınızdayız",
  ctaBandSubtitle: "Keşif, kurulum veya bakım ihtiyacınızı kısaca iletin; dönüş yapalım.",
} as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
