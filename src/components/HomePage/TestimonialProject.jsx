"use client";

import { TestimonialsColumn } from "@/components/ReactProject/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Keerai World consistently supplies fresh, clean leafy greens. The quality is reliable, and the freshness is clearly visible, even during peak demand.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: " Kumar",
    role: "Retail Operations Manager",
  },
  {
    text: "The sourcing standards and handling practices meet our expectations. Keerai World has become a dependable partner for fresh produce in our stores.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Govind",
    role: "Category Manager",
  },
  {
    text: "What stands out is consistency. Every delivery maintains the same level of freshness and cleanliness, which is critical for leafy greens.",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    name: "kerthi ",
    role: "Quality Assurance Lead",
  },
  {
    text: "Our customers appreciate the quality and shelf life. Keerai World products reflect careful harvesting and responsible handling.",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    name: "Anitha",
    role: "Business Owner",
  },
  {
    text: "From order placement to delivery, the process is smooth and professional. Keerai World understands the importance of timely supply for fresh produce.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Ramesh",
    role: "Supply Chain Manager",
  },
  {
    text: "The keerai is fresh, well-sorted, and neatly packed. Customers often return asking specifically for Keerai World greens.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    name: "Vishal",
    role: "Store Manager",
  },
  {
    text: "Keerai World has built strong trust through quality and transparency. Their brand reflects professionalism and care for natural nutrition.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Balaji",
    role: "Marketing Director",
  },
  {
    text: "The produce quality supports repeat purchases. Customers value the freshness and the consistent taste in everyday cooking.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sri latha",
    role: "Sales Manager",
  },
  {
    text: "Keerai World helped us strengthen our fresh greens category. The products clearly reflect responsible sourcing and careful post-harvest handling.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Ajith",
    role: "E-commerce Partner",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="relative md:my-20 my-0 top-15 md:-top-10 bottom-30 text-white">
      <div className="container mx-auto relative z-10 px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-xl mx-auto"
        >
         <span className="border border-white/10 bg-white py-1 px-4 rounded-lg text-sm text-[#00945A]/80 font-semibold">
   Customer Experiences
</span>

<h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#00945A]">
  Trusted by Those Who Value Pure Nutrition 
</h2>

<p className="mt-4 text-sm text-[#00945A]/80 leading-relaxed">
  Thoughtful words from families, chefs, and wellness partners who choose
  Keerai World for its uncompromising freshness, natural nutrition, and
  consistently high standards from farm to home.
</p>

        </motion.div>

        {/* COLUMNS */}
        <div className="mt-12 flex justify-center gap-6 max-h-[740px]  overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={18} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={16} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
