import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { tableStyles as styles } from '../../../css/global';
import DataTable from '@/Components/DataTable';
import { formatDate } from '../../../css/dateFormatter';
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Show({ auth, coa }) {

    const exportarArquivos = () => {
        Inertia.post(route('exportar.arquivos'), {}, {
          onStart: () => console.log('Exportando...'),
          onFinish: () => console.log('Exportação concluída!')
        });
      };
    const columns = [
        {
            header: 'Data de Criação',
            accessor: 'date_created_coa',
            render: (row) => formatDate(row.date_created_coa)
        },
        {
            header: 'Aprovado',
            accessor: 'aprovado',
            render: (row) => row.aprovado
        },
        {
            header: 'Completo',
            accessor: 'completo',
            render: (row) => row.completo
        },
        {
            header: 'Existe no Drive',
            accessor: 'drive_existe',
            render: (row) => row.drive_existe
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
            header: 'Ações',
            render: (row) => (
                <div className="flex space-x-2">
                    <a
                        href={`/storage/${row.path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                    >
                        Download
                    </a>
                    <Link
                        href={route('pdf-files.edit', row.id)}
                        className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors text-sm"
                    >
                        Editar
                    </Link>
                </div>
            )
        }
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Estante - ${coa.nome_med}`} />

            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Detalhes do Coa</h2>
                        <Link
                            href={route('coas.index')}
                            className={`${styles.actionButton} ${styles.primaryButton}`}
                        >
                            Voltar
                        </Link>
                    </div>
<div>
<button
      onClick={exportarArquivos}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Exportar PDFs
    </button>
</div>
                    <div className="mb-8 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-medium mb-4">Informações do Coa</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Nome</p>
                                <p className="mt-1">{coa.nome_med}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Local</p>
                                <p className="mt-1">{coa.tipo_med}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-medium mb-4">Arquivos PDF</h3>
                        <DataTable
                            columns={columns}
                            data={coa.pdf_files}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
