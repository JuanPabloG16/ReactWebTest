'use client';
import calc from'./calc.module.css';
import { useRouter } from 'next/navigation';

export default function Calculadora(){
    const router = useRouter();

    const volver =()=>{
        router.push('/dashboard');
    };
    return(
        <section>
            <h1 className={calc.titulo}> Hola desde el Calculadora</h1>
            <button onClick={volver}>Volver a dashboard</button>
        </section>
    );
}