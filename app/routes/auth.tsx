import { Link, useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

export const meta = () => ([
    { title: 'Resumuo | Auth' },
    { name: 'description', content: 'Log in to your account' },
]);

function Auth() {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);
    const next = query.get("next") || "/";

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(next);
        }
    }, [auth.isAuthenticated, next, navigate]);

    return (
        <main className="bg-[url('public/images/bg-auth.svg')] bg-cover min-h-screen flex justify-center items-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div>
                        <h1>Welcome Back</h1>
                        <h2>Log In to Continue Your Job Journey</h2>
                    </div>

                    {isLoading ? (
                        <button className="auth-button animate-pulse">
                            <p>Signing you in...</p>
                        </button>
                    ) : (
                        <>
                            {auth.isAuthenticated ? (
                                <button
                                    className="auth-button"
                                    onClick={() => auth.signOut()}
                                >
                                    <p>Log Out</p>
                                </button>
                            ) : (
                                <button
                                    className="auth-button"
                                    onClick={() => auth.signIn()}
                                >
                                    <p>Log in</p>
                                </button>
                            )}
                        </>
                    )}
                </section>
            </div>
        </main>
    );
}

export default Auth;