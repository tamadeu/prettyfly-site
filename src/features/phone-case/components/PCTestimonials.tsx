import { TestimonialSection } from '@/features/home/components/TestimonialSection';

export function PCTestimonials() {
  return (
    <div className="pc-testimonials-wrap">
      <TestimonialSection />
      <style>{`
        .pc-testimonials-wrap .ts-section {
          background: #f9f9f9 !important;
        }
      `}</style>
    </div>
  );
}
