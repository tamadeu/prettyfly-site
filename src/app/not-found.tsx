import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container>
      <div className="py-[10rem] text-center">
        <h1 className="text-[8rem] font-bold text-heading mb-[1rem]">404</h1>
        <p className="text-[2rem] text-body mb-[3rem]">Página não encontrada</p>
        <p className="text-[1.4rem] text-body mb-[4rem] max-w-[40rem] mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button variant="dark" size="lg">Voltar ao início</Button>
        </Link>
      </div>
    </Container>
  );
}
