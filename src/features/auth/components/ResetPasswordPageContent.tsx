'use client';

import Link from 'next/link';
import { useState } from 'react';

const ACCENT = '#c96742';
const DARK = '#111111';

function ArrowDiag() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

async function post(url: string, body: Record<string, string>): Promise<{ ok: boolean; message: string }> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const json = await response.json().catch(() => ({}));
    const first = json.errors ? Object.values(json.errors as Record<string, string[]>)[0]?.[0] : undefined;
    if (response.status === 429) return { ok: false, message: 'Muitas tentativas. Aguarde um minuto.' };
    return { ok: response.ok, message: first ?? json.message ?? (response.ok ? 'Pronto.' : 'Não foi possível concluir.') };
  } catch {
    return { ok: false, message: 'Sem conexão. Tente novamente.' };
  }
}

export function ResetPasswordPageContent({ token, initialEmail }: { token?: string; initialEmail?: string }) {
  const [email, setEmail] = useState(initialEmail ?? '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    const result = token
      ? await post('/api/auth/reset-password', { token, email, password })
      : await post('/api/auth/forgot-password', { email });
    setLoading(false);
    setFeedback(result);
    if (result.ok) setPassword('');
  }

  return (
    <>
      <div className="rp-hero">
        <h1 className="rp-hero-title">Entrar</h1>
      </div>

      <div className="container-main" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
        <div className="rp-layout">

          {/* ── Left: Reset form ── */}
          <section>
            <h2 className="rp-heading">{token ? 'Criar nova senha' : 'Redefinir sua senha'}</h2>
            <p className="rp-desc">
              {token ? 'Escolha uma nova senha com pelo menos 8 caracteres.' : 'Enviaremos um e-mail para você redefinir sua senha.'}
            </p>
            <form className="rp-form" onSubmit={submit}>
              <input
                type="email"
                placeholder="E-mail *"
                required
                readOnly={Boolean(token && initialEmail)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="au-input"
              />
              {token && (
                <input
                  type="password"
                  placeholder="Nova senha *"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="au-input"
                />
              )}
              {feedback && (
                <p role="alert" style={{ color: feedback.ok ? '#2e7d32' : '#c0392b', fontSize: '1.4rem', margin: 0 }}>
                  {feedback.message}{' '}
                  {feedback.ok && token && <Link href="/login" style={{ textDecoration: 'underline' }}>Entrar</Link>}
                </p>
              )}
              <div>
                <Link href="/login" className="rp-cancel">Cancelar</Link>
              </div>
              <div>
                <button type="submit" className="rp-submit" disabled={loading}>
                  {loading ? 'Enviando...' : token ? 'Salvar nova senha' : 'Redefinir senha'}
                </button>
              </div>
            </form>
          </section>

          {/* ── Right: New user ── */}
          <section>
            <h2 className="rp-heading">Ainda não tenho uma conta</h2>
            <p className="rp-new-text">
              Cadastre-se para ter acesso antecipado às{' '}
              <span style={{ color: ACCENT }}>promoções</span>, além de novidades,
              tendências e ofertas selecionadas. Para cancelar o recebimento,
              clique no link de descadastro em nossos e-mails.
            </p>
            <Link href="/register" className="rp-register-link">
              Criar conta <ArrowDiag />
            </Link>
          </section>

        </div>
      </div>

      <style>{rpStyles}</style>
    </>
  );
}

const rpStyles = `
  /* ── Hero ── */
  .rp-hero {
    background: linear-gradient(135deg, #ffffff 0%, #fdf4f0 50%, #fde8df 100%);
    padding: 5.5rem 0;
    text-align: center;
  }
  .rp-hero-title {
    font-size: 4rem;
    font-weight: 400;
    color: var(--color-heading);
    letter-spacing: 0.01em;
  }

  /* ── Two-column layout ── */
  .rp-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    align-items: start;
  }
  .rp-heading {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--color-heading);
    margin-bottom: 1.6rem;
  }

  /* ── Description ── */
  .rp-desc {
    font-size: 1.35rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  /* ── Form ── */
  .rp-form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    max-width: 42rem;
  }
  .au-input {
    width: 100%;
    height: 4.8rem;
    border: 1px solid #d5d5d5;
    border-radius: 0.3rem;
    padding: 0 1.4rem;
    font-size: 1.4rem;
    color: var(--color-heading);
    background: #fff;
    outline: none;
    font-family: inherit;
    transition: border-color 0.2s;
  }
  .au-input:focus { border-color: #888; }
  .au-input::placeholder { color: #bbb; }

  /* ── Cancel / submit ── */
  .rp-cancel {
    font-size: 1.35rem;
    color: var(--color-heading);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .rp-cancel:hover { color: ${ACCENT}; }
  .rp-submit {
    height: 5rem;
    min-width: 20rem;
    background: ${DARK};
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    font-family: inherit;
    padding: 0 3.2rem;
    letter-spacing: 0.02em;
    transition: background 0.2s;
  }
  .rp-submit:hover { background: #333; }

  /* ── Right column ── */
  .rp-new-text {
    font-size: 1.35rem;
    color: #555;
    line-height: 1.65;
    margin-bottom: 1.6rem;
  }
  .rp-register-link {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-heading);
    text-decoration: underline;
    text-underline-offset: 3px;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
  .rp-register-link:hover { color: ${ACCENT}; }

  @media (max-width: 749px) {
    .rp-layout { grid-template-columns: 1fr; gap: 4rem; }
    .rp-hero-title { font-size: 3rem; }
  }
`;
