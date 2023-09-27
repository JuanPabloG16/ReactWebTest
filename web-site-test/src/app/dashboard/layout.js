import Link from "next/link";
export default function DashboardLayout({
    children
}){
    return(
        <>
        <header>App Test</header>
        <main>
            <nav>
                <ul>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href='/dashboard/calculadora'>Calculadora</Link>
                    </li>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                </ul>
            </nav>
            <section>
                {children}
            </section>
        </main>
        <footer>App test 2023</footer>
        </>
    );
}