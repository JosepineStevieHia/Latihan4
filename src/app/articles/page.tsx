import { getArticles, Article } from "./services/getarticles";
import CardArticle from "./components/card_article";

export default async function ArticlesPage() {
  const articles: Article[] = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">DAFTAR ARTIKEL</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <CardArticle
              title={article.title}
              img={article.urlimage}
              desc={article.description}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}