interface Props {
  description?: string
}

export default function Content ({ description }: Props) {  
  return (
    <section className="flex flex-col w-10/12 gap-y-5 mx-auto text-justify">
      <p>{description}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident quaerat voluptatum quae ratione incidunt eius ducimus. Nam fuga reprehenderit eum deleniti, perferendis quia quas nesciunt quos a molestias officiis.</p>
    </section>
  )
}