import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 });
  }

  const { error } = await supabase
    .from('plm_waitlist')
    .insert({ email: email.toLowerCase().trim() });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'E-mail já cadastrado' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
