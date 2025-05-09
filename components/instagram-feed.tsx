import InstagramCard from "@/components/instagram-card"

// Sabit Instagram gönderileri
const instagramPosts = [
  {
    id: 1,
    imageUrl: "/images/insta1.png",
    caption: "Saroz'da gün batımı 🌅 #kamp #doğa #saroz",
  },
  {
    id: 2,
    imageUrl: "/images/insta2.png",
    caption: "Çadır kampımızdan manzara 🏕️ #kampçılık #doğayla",
  },
  {
    id: 3,
    imageUrl: "/images/insta3.png",
    caption: "Deniz, kum, güneş ☀️ #plaj #deniz #tatil",
  },
  {
    id: 4,
    imageUrl: "/images/insta4.png",
    caption: "Akşam yemeği hazırlıkları 🍖 #mangal #kamp",
  },
]

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {instagramPosts.map((post) => (
        <InstagramCard key={post.id} imageUrl={post.imageUrl} caption={post.caption} />
      ))}
    </div>
  )
}
