"use server"

import { z } from "zod"

// Resend API anahtarı (gerçek uygulamada .env dosyasından alınmalı)
// const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "kamp@example.com" // Kamp alanı sahibinin e-postası

const reservationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  guests: z.string().min(1),
  startDate: z.date(),
  endDate: z.date(),
  message: z.string().optional(),
})

export async function createReservation(formData: any) {
  // Form verilerini doğrula
  const validatedData = reservationSchema.parse(formData)

  // Rezervasyon verilerini hazırla
  const reservationData = {
    ...validatedData,
    startDate: validatedData.startDate.toISOString().split("T")[0],
    endDate: validatedData.endDate.toISOString().split("T")[0],
    createdAt: new Date().toISOString(),
  }

  try {
    // Burada veritabanına kaydetme işlemi yapılabilir

    // E-posta gönderme işlemi (Resend API kullanarak)
    // Gerçek uygulamada bu kısmı aktif edin
    /*
    // Müşteriye e-posta gönder
    await resend.emails.send({
      from: 'Saroz Kamp <rezervasyon@sarozkamp.com>',
      to: validatedData.email,
      subject: 'Rezervasyon Talebiniz Alındı',
      html: `
        <h1>Rezervasyon Talebiniz Alındı</h1>
        <p>Sayın ${validatedData.name},</p>
        <p>Saroz Kamp Alanı rezervasyon talebiniz başarıyla alınmıştır. Rezervasyon detaylarınız aşağıdadır:</p>
        <ul>
          <li>Giriş Tarihi: ${reservationData.startDate}</li>
          <li>Çıkış Tarihi: ${reservationData.endDate}</li>
          <li>Kişi Sayısı: ${reservationData.guests}</li>
        </ul>
        <p>Rezervasyon talebiniz incelendikten sonra onay e-postası tarafınıza gönderilecektir.</p>
        <p>Teşekkür ederiz,<br>Saroz Kamp Ekibi</p>
      `,
    });
    
    // Kamp sahibine e-posta gönder
    await resend.emails.send({
      from: 'Saroz Kamp <rezervasyon@sarozkamp.com>',
      to: OWNER_EMAIL,
      subject: 'Yeni Rezervasyon Talebi',
      html: `
        <h1>Yeni Rezervasyon Talebi</h1>
        <p>Aşağıdaki bilgilerle yeni bir rezervasyon talebi alındı:</p>
        <ul>
          <li>Ad Soyad: ${validatedData.name}</li>
          <li>E-posta: ${validatedData.email}</li>
          <li>Telefon: ${validatedData.phone}</li>
          <li>Kişi Sayısı: ${validatedData.guests}</li>
          <li>Giriş Tarihi: ${reservationData.startDate}</li>
          <li>Çıkış Tarihi: ${reservationData.endDate}</li>
          <li>Ek Notlar: ${validatedData.message || 'Belirtilmemiş'}</li>
        </ul>
      `,
    });
    */

    // Başarılı sonuç döndür
    return { success: true, data: reservationData }
  } catch (error) {
    console.error("Rezervasyon oluşturma hatası:", error)
    throw new Error("Rezervasyon oluşturulurken bir hata oluştu")
  }
}
