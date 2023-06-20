interface Props {
  url?: string
}

export default function Hero ({ url }: Props) {
  return (
    <section className="w-full h-[35vh] md:h-[50vh] rounded-2xl overflow-clip bg-gray-300">
      {
        url && (
          <img 
            src={url} 
            className="w-full h-full object-cover"
            alt={`Hero image of recipe - with id - `}
          />
        )
      }
    </section>
  )
}