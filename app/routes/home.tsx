import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rsumuo" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('public/images/bg-main.svg')]">
    <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Rating</h1>
          <h2>Drop your resume for an ATS score and improvement tips.</h2>
        </div>
      </section>
  </main>
}
