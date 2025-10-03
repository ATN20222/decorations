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

    const html = `
      <div style="font-family:Arial,sans-serif;color:#222;line-height:1.6">
        <h2 style="margin:0 0 12px">رسالة جديدة من صفحة الاتصال</h2>
        <p><strong>الاسم:</strong> ${escapeHtml(name)}</p>
        <p><strong>البريد:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>الهاتف:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>الموضوع:</strong> ${escapeHtml(subject)}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `

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


