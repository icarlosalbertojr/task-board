import Head from 'next/head'
import styles from './styles.module.css'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { TextArea } from '@/components/textarea'
import { FiShare2 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'

export default function Dashboard () {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>
                        <form action="">
                            <TextArea 
                                placeholder="Digite qual sua terefa..."
                            />
                            <div className={styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox} />
                                <label>
                                    Deixar tarefa pública
                                </label>
                            </div>

                            <button className={styles.button} type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>
                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>
                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>Pública</label>
                            <button className={styles.shareButton}>
                                <FiShare2
                                    size={22}
                                    color='#3183FF'
                                />
                            </button>
                        </div>
                        <div className={styles.taskContent}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quis nisi labore facilis ad placeat perspiciatis sequi optio iste!</p>
                            <button>
                                <FaTrash
                                    size={24}
                                    color="#EA3140"
                                />
                            </button>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const session = await getSession({ req });

    if(!session?.user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {props: {}}
}