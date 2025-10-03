import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, subject, message, honeypot } = req.body || {}

    if (honeypot) {
      return res.status(400).json({ error: 'Bad request' })
    }
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return res.status(500).json({ error: 'Email service not configured' })
    }

    const resend = new Resend(resendApiKey)

    const html = generateEmailHTML({ name, email, phone, subject, message })

    await resend.emails.send({
      from: 'Decorations <onboarding@resend.dev>',
      to: ['antonabdalla30@gmail.com'],
      subject: `اتصال جديد: ${subject}`,
      reply_to: email,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact handler error', err)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function generateEmailHTML({ name, email, phone, subject, message }) {
  const primary = '#45B69A'
  const secondary = '#282C49'
  const accent = '#F4B71F'
  const text = '#222222'
  const muted = '#6C757D'

  return `
  <div dir="rtl" lang="ar" style="margin:0;padding:0;background:#F7F8FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:${text};">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#F7F8FA;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;background:#ffffff;border-radius:16px;box-shadow:0 10px 24px rgba(16,24,40,0.08);overflow:hidden;border:1px solid rgba(40,44,73,0.06);">
            <tr>
              <td style="padding:0">
                <div style="height:6px;background:linear-gradient(90deg, ${primary}, ${secondary}, ${accent});"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 24px 8px 24px">
                <h2 style="margin:0 0 8px 0;color:${secondary};font-size:22px;">رسالة جديدة من صفحة الاتصال</h2>
                <p style="margin:0;color:${muted};font-size:14px;">وصلتكم رسالة جديدة من موقع ديكورات الكويت.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 8px 24px">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 8px;">
                  <tr>
                    <td style="background:#F5FBF9;border:1px solid rgba(69,182,154,0.25);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">الاسم:</strong> ${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="background:#F5FBF9;border:1px solid rgba(69,182,154,0.25);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">البريد:</strong> ${escapeHtml(email)}</td>
                  </tr>
                  ${phone ? `<tr><td style="background:#F5FBF9;border:1px solid rgba(69,182,154,0.25);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">الهاتف:</strong> ${escapeHtml(phone)}</td></tr>` : ''}
                  <tr>
                    <td style="background:#FFFDF5;border:1px solid rgba(244,183,31,0.35);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">الموضوع:</strong> ${escapeHtml(subject)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 16px 24px">
                <div style="background:#ffffff;border:1px solid rgba(40,44,73,0.08);border-radius:12px;padding:16px;">
                  <div style="color:${secondary};font-weight:700;margin-bottom:8px;">نص الرسالة</div>
                  <div style="color:${text};white-space:pre-wrap;line-height:1.8;">${escapeHtml(message)}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 24px 24px">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:700;">رد على المرسل</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px 20px 24px;background:#FAFAFB;border-top:1px solid rgba(16,24,40,0.06);">
                <p style="margin:0;font-size:12px;color:${muted};">مرسل بواسطة نظام الموقع | شركة ديكورات الكويت المتميزة</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`
}


