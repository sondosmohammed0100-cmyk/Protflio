import { createContext, useContext, useEffect, useState } from "react";
import { portfolioDataEN, portfolioDataAR } from "../data";

const LanguageContext = createContext();

const translations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    services: "Services",
    contact_me: "Contact Me",
    download_resume: "Resume",
    let_collaborate: "Let's Collaborate",
    network: "Network:",
    hero_hi: "Hi, I'm",
    hero_desc: "Engineering intelligence from data. Bridging the gap between agricultural systems and cutting-edge AI analytics.",
    hero_intro: "Architecting ",
    hero_intelligence: "robust solutions",
    hero_from_data: " for the web. Specialized in ",
    hero_agri: "Scalable Systems",
    hero_and: " and ",
    hero_ai_analytics: "Cloud Infrastructure.",
    hero_open: "Open for Innovation",
    hero_months: "Engineering Specialist",
    integrated_tech: "Integrated Tech Stack",
    discover: "Discover",
    biography: "Biography",
    about_title: "Bridging Two Worlds.",
    download_cv: "Download CV",
    contact_title: "Start a Conversation.",
    contact_desc: "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    name: "Name",
    email: "Email",
    message: "Message",
    send_message: "Send Message",
    sending: "Sending...",
    capabilities: "Capabilities",
    technical_arsenal: "Technical Arsenal.",
    portfolio: "Portfolio",
    featured_cases: "Featured ",
    featured_studies: "Case Studies.",
    case_study: "Case Study",
    explore_more: "Explore More Repositories",
    career: "Career",
    professional_journey: "Professional ",
    professional_journey_bold: "Journey.",
    academic: "Academic",
    educational_foundations: "Educational ",
    educational_foundations_bold: "Foundations.",
    credentials: "Credentials",
    professional_validations: "Professional ",
    professional_validations_bold: "Validations.",
    issued_by: "Issued by",
    view_cert: "View Certificate",
    mastering_ai: "Mastering Full Stack & DevOps",
    nine_month: "Comprehensive training in modern software engineering and cloud deployment.",
    case_problem: "The Challenge",
    case_solution: "Technical Solution",
    case_impact: "Business Impact",
    filter_all: "All",
    matcher_title: "Software Project Matcher",
    matcher_btn: "Find My Match",
    matcher_step1: "Select your development area:",
    matcher_step2: "Select the project priority:",
    matcher_calculating: "Matching with your interests...",
    matcher_result: "I recommend this software project:",
    matcher_reset: "Start Over",
    domain_web: "Web Applications",
    domain_backend: "Backend Systems",
    domain_devops: "Cloud & DevOps",
    domain_system: "System Engineering",
    sol_ux: "User Experience",
    sol_data: "Data Management",
    sol_ops: "Automation",
    sol_sec: "Security",
    perspective_official: "Official",
    perspective_tech: "Tech Specs",
    perspective_story: "The Journey",
    metric_models: "Models Trained",
    metric_data: "Data Cleaned",
    metric_precision: "Avg Precision",
  },
  ar: {
    about: "نبذة عني",
    skills: "المهارات",
    projects: "المشاريع",
    experience: "الخبرات",
    education: "التعليم",
    certifications: "الشهادات",
    services: "الخدمات",
    contact_me: "تواصل معي",
    download_resume: "السيرة الذاتية",
    let_collaborate: "لنتعاون معاً",
    network: "الشبكات:",
    hero_hi: "مرحباً، أنا",
    hero_intro: "هندسة ",
    hero_intelligence: "حلول برمجية",
    hero_from_data: " متكاملة. متخصص في ",
    hero_agri: "الأنظمة السحابية",
    hero_and: " و ",
    hero_ai_analytics: "تطوير الويب الشامل.",
    hero_open: "متاح للابتكار",
    hero_months: "متخصص في هندسة البرمجيات",
    integrated_tech: "حزمة التقنيات المتكاملة",
    discover: "اكتشف",
    biography: "السيرة الذاتية",
    about_title: "الربط بين عالمين.",
    download_cv: "تحميل السيرة الذاتية",
    contact_title: "ابدأ محادثة.",
    contact_desc: "متاح حالياً لفرص جديدة. سواء كان لديك سؤال أو تريد فقط إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send_message: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    capabilities: "القدرات",
    technical_arsenal: "الترسانة ",
    technical_arsenal_bold: "التقنية.",
    portfolio: "معرض الأعمال",
    featured_cases: "أبرز ",
    featured_studies: "دراسات الحالة.",
    case_study: "دراسة حالة",
    explore_more: "استكشف المزيد من المستودعات",
    career: "المسيرة المهنية",
    professional_journey: "رحلتي ",
    professional_journey_bold: "المهنية.",
    academic: "أكاديمي",
    educational_foundations: "الأسس ",
    educational_foundations_bold: "التعليمية.",
    credentials: "الوثائق المعتمدة",
    professional_validations: "الاعتمادات ",
    professional_validations_bold: "المهنية.",
    issued_by: "صُدرت من",
    view_cert: "عرض الشهادة",
    mastering_ai: "احتراف تطوير الويب الشامل والـ DevOps",
    nine_month: "تدريب مكثف على هندسة البرمجيات الحديثة ونشر الأنظمة السحابية.",
    case_problem: "التحدي التقني",
    case_solution: " الحل الهندسي",
    case_impact: "الأثر والنتائج",
    filter_all: "الكل",
    matcher_title: "مستشار المشاريع البرمجية",
    matcher_btn: "طابق اهتماماتي",
    matcher_step1: "اختر مجال التطوير الذي تفضله:",
    matcher_step2: "اختر أولوية المشروع التقنية:",
    matcher_calculating: "جاري البحث عن المشروع الأنسب...",
    matcher_result: "بناءً على اختياراتك، هذا المشروع هو الأنسب:",
    matcher_reset: "إعادة المحاولة",
    domain_web: "تطبيقات الويب",
    domain_backend: "الأنظمة الخلفية",
    domain_devops: "السحابة والـ DevOps",
    domain_system: "هندسة الأنظمة",
    sol_ux: "تجربة المستخدم (UX)",
    sol_data: "إدارة البيانات",
    sol_ops: "الأتمتة",
    sol_sec: "أمن المعلومات",
    perspective_official: "الرسمي",
    perspective_tech: "المواصفات التقنية",
    perspective_story: "القصة المُلهمة",
    metric_models: "نماذج مُدربة",
    metric_data: "ملايين القيود المحللة",
    metric_precision: "معدل الدقة",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const documentBody = window.document.body;
    documentBody.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "ar") {
      documentBody.classList.add("font-arabic"); 
    } else {
      documentBody.classList.remove("font-arabic");
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const currentData = language === 'ar' ? portfolioDataAR : portfolioDataEN;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, portfolioData: currentData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export const usePortfolioData = () => {
  const { portfolioData } = useContext(LanguageContext);
  return portfolioData;
};
