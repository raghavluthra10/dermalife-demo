const BlogSection = () => {
  const blogs = [
    { cat: "Aesthetics", title: "The Rise of Bio-Remodelling in 2026", img: "https://images.unsplash.com/photo-1594434296624-5059bb7cd8bc?auto=format&fit=crop&w=400" },
    { cat: "Wellness", title: "Why Hydration is the Secret to Eternal Glow", img: "https://images.unsplash.com/photo-1611082216373-7f1bbad1e79d?auto=format&fit=crop&w=400" },
    { cat: "Skin Concerns", title: "Acne Management: Beyond Surface Care", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400" },
    { cat: "Innovation", title: "How AI is Personalising Your Skincare Routine", img: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&w=400" },
  ];

  return (
    <section className="py-spacing-section px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl text-brand-green font-primary font-bold uppercase tracking-tighter">The DermaLife Buzz</h2>
          <a href="#" className="text-brand-gold font-bold uppercase tracking-widest text-sm border-b-2 border-brand-gold pb-1 hover:text-brand-green transition-colors font-primary">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative shadow-sm">
                  <div className="absolute inset-0 bg-brand-muted/20" />
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">{blog.cat}</span>
                  <span className="text-xs text-brand-dark/40 font-bold uppercase">April 2026</span>
                </div>
                <h3 className="text-xl font-primary text-brand-dark group-hover:text-brand-green transition-colors line-clamp-2 font-bold leading-snug uppercase tracking-tight">
                  {blog.title}
                </h3>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
