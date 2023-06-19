import Header from "../components/common/Header";
import IPageTemplate from "../interfaces/templates/PageTemplate.interface";

export default function PageTemplate({ showHeader = true, children }: IPageTemplate) {
  return (
    <>      
      {showHeader && <Header />}
      <main className="max-w-screen-2xl w-10/12 mx-auto pb-10">
        {children}
      </main>
    </>
  )
}