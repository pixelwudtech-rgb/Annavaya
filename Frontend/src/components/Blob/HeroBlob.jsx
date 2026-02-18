import React, { useState } from "react";

/* ===============================
   BLOG DATA – KEERAI WORLD
================================ */
export const posts = [
  /* ===============================
     FRESHNESS & NUTRITION
  ================================ */
  {
    id: "importance-of-fresh-keerai",
    title: "Why Fresh Keerai Matters for Everyday Nutrition",
    excerpt:
      "Farm-fresh leafy greens support everyday nutrition and serve as a natural base for healthy snacks, green powders, and plant-based food products.",
    date: "May 15, 2025",
    author: "Keerai World",
    authorRole: "Nutrition & Sourcing Team",
    category: "Freshness & Nutrition",
    image:
      "https://images.unsplash.com/photo-1645713595882-b6133d586fd0?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "nutrient-retention-in-leafy-greens",
    title: "How Freshness Preserves Nutrients in Leafy Greens",
    excerpt:
      "Fresh handling helps preserve vitamins and minerals, making leafy greens suitable for nutrition powders, supplements, and wellness-focused foods.",
    date: "May 2, 2025",
    author: "Keerai World",
    authorRole: "Nutrition Research",
    category: "Freshness & Nutrition",
    image:
      "https://images.unsplash.com/photo-1611864581049-aca018410b97?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "daily-nutrition-with-keerai",
    title: "Integrating Keerai into Daily Nutrition",
    excerpt:
      "Regular use of fresh keerai supports daily wellness and provides a clean foundation for ready-to-cook powders and healthy food mixes.",
    date: "April 20, 2025",
    author: "Keerai World",
    authorRole: "Wellness Insights",
    category: "Freshness & Nutrition",
    image:
      "https://images.unsplash.com/photo-1665581454874-40821245a107?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d",
  },

  /* ===============================
     HEALTHY LIVING
  ================================ */
  {
    id: "traditional-greens-modern-living",
    title: "Traditional Greens in Modern Everyday Cooking",
    excerpt:
      "Leafy greens continue to support modern lifestyles through clean nutrition used in snacks, cookies, and plant-based meals.",
    date: "April 28, 2025",
    author: "Keerai World",
    authorRole: "Food & Wellness Insights",
    category: "Healthy Living",
    image:
      "https://images.unsplash.com/photo-1708773703160-26986855e311?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "keerai-and-balanced-lifestyles",
    title: "Keerai and Balanced Living",
    excerpt:
      "Balanced living is supported by leafy greens that naturally fit into everyday meals, health foods, and nutrition-focused products.",
    date: "April 12, 2025",
    author: "Keerai World",
    authorRole: "Lifestyle Research",
    category: "Healthy Living",
    image:
      "https://images.unsplash.com/photo-1547058606-7eb25508e7e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "simple-healthy-meals-with-greens",
    title: "Simple Healthy Meals Using Fresh Greens",
    excerpt:
      "Fresh greens enhance simple home cooking while supporting the growing demand for healthy snacks and natural food alternatives.",
    date: "March 30, 2025",
    author: "Keerai World",
    authorRole: "Culinary Team",
    category: "Healthy Living",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&auto=format&fit=crop&q=60",
  },

  /* ===============================
     FOOD SAFETY
  ================================ */
  {
    id: "safe-handling-of-leafy-greens",
    title: "Safe Handling Practices for Leafy Greens",
    excerpt:
      "Proper handling ensures leafy greens remain suitable for daily meals, nutrition powders, and health-focused food products.",
    date: "April 10, 2025",
    author: "Keerai World",
    authorRole: "Quality & Operations",
    category: "Food Safety",
    image:
      "/Blob/download (1).jpg",
  },
  {
    id: "hygiene-standards-in-fresh-produce",
    title: "Maintaining Hygiene Standards in Fresh Produce",
    excerpt:
      "Strict hygiene standards preserve quality and safety for leafy greens used in supplements, snacks, and wellness foods.",
    date: "March 26, 2025",
    author: "Keerai World",
    authorRole: "Food Safety Team",
    category: "Food Safety",
    image:
      "https://plus.unsplash.com/premium_photo-1678655491247-8e138732a82e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "cleaning-leafy-greens-correctly",
    title: "The Right Way to Clean Leafy Greens",
    excerpt:
      "Correct cleaning methods protect freshness and ensure leafy greens are safe for everyday cooking and food processing.",
    date: "March 14, 2025",
    author: "Keerai World",
    authorRole: "Operations Team",
    category: "Food Safety",
    image:
      "/Blob/How to Store Lettuce So It Keeps for Weeks!.jpg",
  },

  /* ===============================
     SUPPLY & TRUST
  ================================ */
  {
    id: "consistency-in-farm-supply",
    title: "The Importance of Consistency in Fresh Produce Supply",
    excerpt:
      "Consistent sourcing ensures reliable quality for households, snack manufacturers, and nutrition product partners.",
    date: "March 22, 2025",
    author: "Keerai World",
    authorRole: "Supply Chain Team",
    category: "Supply & Trust",
    image:
      "/Blob/covai.jpg",
  },
  {
    id: "building-trust-through-sourcing",
    title: "Building Trust Through Responsible Sourcing",
    excerpt:
      "Responsible sourcing builds trust across the supply chain for leafy greens used in powders, snacks, and supplements.",
    date: "March 8, 2025",
    author: "Keerai World",
    authorRole: "Sourcing Team",
    category: "Supply & Trust",
    image:
      "/Blob/vecteezy_lush-green-plants_1995823.jpg",
  },
  {
    id: "reliable-greens-for-businesses",
    title: "Why Businesses Rely on Consistent Greens Supply",
    excerpt:
      "Food businesses depend on consistent greens supply for reliable production of healthy snacks and plant-based foods.",
    date: "February 26, 2025",
    author: "Keerai World",
    authorRole: "Business Operations",
    category: "Supply & Trust",
    image:
      "/Blob/Image-1_-Business-Benefits-of-Green-Computing-1024x601.png",
  },

  /* ===============================
     EVERYDAY WELLNESS
  ================================ */
  {
    id: "balanced-meals-with-keerai",
    title: "Building Balanced Meals with Leafy Greens",
    excerpt:
      "Leafy greens naturally support balanced meals and everyday wellness through simple, nutrient-rich food choices.",
    date: "March 5, 2025",
    author: "Keerai World",
    authorRole: "Product Knowledge",
    category: "Everyday Wellness",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "everyday-wellness-through-greens",
    title: "Supporting Everyday Wellness with Fresh Greens",
    excerpt:
      "Daily consumption of fresh greens supports energy, digestion, and long-term wellness-focused food habits.",
    date: "February 20, 2025",
    author: "Keerai World",
    authorRole: "Wellness Team",
    category: "Everyday Wellness",
    image:
      "https://images.unsplash.com/photo-1498048615146-6a435b1e65a4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "simple-ways-to-eat-greens-daily",
    title: "Simple Ways to Include Greens Every Day",
    excerpt:
      "Simple daily habits using leafy greens support clean eating, balanced nutrition, and long-term wellness.",
    date: "February 6, 2025",
    author: "Keerai World",
    authorRole: "Customer Education",
    category: "Everyday Wellness",
    image:
      "https://plus.unsplash.com/premium_photo-1702286619408-f154638815ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const categories = ["All Posts", ...new Set(posts.map(p => p.category))];

/* ===============================
   BLOG PAGE – KEERAI WORLD
================================ */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts =
    activeCategory === "All Posts"
      ? posts
      : posts.filter(post => post.category === activeCategory);

  return (
    <main className="text-[#00945A] min-h-screen py-20">

      {/* HERO */}
      <section className="pt-40 pb-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00945A]">
          Insights from Keerai World
        </h1>
        <p className="text-[#00945A]/80 text-lg max-w-2xl mx-auto ">
          Thoughtful perspectives on fresh greens, responsible sourcing,
          and everyday wellnessrooted in experience and care.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-screen-2xl mx-auto px-5">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium transition-all
                ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-100 text-[#00945A]/80 hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* POSTS GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:px-16 text-[#00945A]">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition hover:-translate-y-1 "
            >
              {/* IMAGE */}
              <a href={`/blog/${post.id}`} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
              </a>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center text-sm mb-4 text-gray-500">
                  <span className="font-medium text-[#00945A]/80">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                <a href={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold mb-2 hover:text-gray-600 transition">
                    {post.title}
                  </h2>
                </a>

                <p className="text-[#00945A]/80 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* AUTHOR */}
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-[#00945A]/80">
                    {post.authorRole}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="flex justify-center mt-20 pb-20">
          <a href="/Contact" className="bg-black text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            Connect with Keerai World →
          </a>
        </div> */}
      </section>
    </main>
  );
}
