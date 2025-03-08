import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { tableStyles as styles } from '../../../css/global';
import DataTable from '@/Components/DataTable';

export default function Index({ auth, pdfFiles }) {
    const columns = [
        {
            header: 'Arquivo',
            accessor: 'path',
            render: (row) => row.path.split('/').pop()
        },
        {
            header: 'Data de Criação',
            accessor: 'date_created_coa'
        },
        {
            header: 'Link',
            accessor: 'link_sclabs',
            render: (row) => row.link_sclabs ? (
                <a
                    href={row.link_sclabs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-900"
                >
                    Ver link
                </a>
            ) : '-'
        },
        {
            header: 'Estante',
            accessor: 'coas',
            render: (row) => row.coas ? row.coas.nome_med : '-'
        },
        {
            header: 'Ações',
            render: (row) => (
                <div className="flex space-x-3">
                    <a
                        href={`/storage/${row.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-900"
                    >
                        Download
                    </a>
                    <Link
                        href={route('pdf-files.edit', row.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                    >
                        Editar
                    </Link>
                </div>
            )
        }
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Arquivos PDF" />

            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Arquivos PDF</h2>
                        <Link
                            href={route('pdf-files.create')}
                            className={`${styles.actionButton} ${styles.primaryButton}`}
                        >
                            Novo Arquivo
                        </Link>
                    </div>

                    <DataTable
                        columns={columns}
                        data={pdfFiles}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
