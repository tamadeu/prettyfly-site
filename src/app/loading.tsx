import { Container } from '@/components/layout/Container';

export default function Loading() {
  return (
    <Container>
      <div className="py-[8rem] text-center">
        <div className="inline-block w-[4rem] h-[4rem] border-3 border-border border-t-dark rounded-full animate-spin" />
      </div>
    </Container>
  );
}
