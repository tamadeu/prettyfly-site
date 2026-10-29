import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-[3rem]', align === 'center' && 'text-center', className)}>
      <h2 className="text-[2.4rem] md:text-[3.2rem] font-semibold text-heading">{title}</h2>
      {subtitle && (
        <p className="mt-[0.8rem] text-[1.4rem] text-body">{subtitle}</p>
      )}
    </div>
  );
}
