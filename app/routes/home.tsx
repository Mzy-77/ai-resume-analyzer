import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import {resumes} from "~/constants";
import Card from "~/components/Card";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " " },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');

  }, [auth.isAuthenticated])
  return <main className="bg-[url('public/images/bg-main.svg')] min-h-screen">
    <Navbar />
      <section className="main-section">
        <div className="page-heading py-16 ">
          <h1>Track Your Applications & Resume Rating</h1>
          <h2>Drop your resume for an ATS score and improvement tips.</h2>
        </div>
      </section>
    {resumes.length > 0 && (
        <div className="resumes-section">
              {resumes.map(resume => (
                  <Card key={resume.id} resume={resume} />
              ))}
        </div>
    )}
  </main>
}
