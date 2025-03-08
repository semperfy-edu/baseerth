import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { tableStyles as styles } from '../../../css/global';
import DataTable from '@/Components/DataTable';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import { formatDate } from '../../../css/dateFormatter';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export default function Index({ auth, coas }) {
    const [selectedEstante, setSelectedEstante] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { data, setData, post, processing, reset, errors } = useForm({
        pdf_file: null,
        date_created_coa: '',
        link_sclabs: '',
        aprovado: '',    // Set default to 'Nao'
        completo: '',    // Set default to 'Nao'
        drive_existe: '' // Set default to 'Nao'
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data before submit:', data); // For debugging

        // Force the values to match exactly what was selected
        const formData = {
            ...data,
            aprovado: e.target.aprovado.value,
            completo: e.target.completo.value
        };

        post(route('coas.add-file', selectedEstante.id), {
            ...formData,
            forceFormData: true,
            onSuccess: () => {
                setShowModal(false);
                reset();
            },
        });
    };



    const columns = [
        { header: 'Medicamento', accessor: 'nome_med' },
        { header: 'Tipo', accessor: 'tipo_med' },
        // {
        //     header: 'Data de Criação',
        //     accessor: 'date_created_coa',
        //     render: (row) => formatDate(row.date_created_coa)
        // },
        {
            header: 'Arquivos',
            accessor: 'pdf_files',
            render: (row) => row.pdf_files.length
        },
        {
            header: 'Ações',
            render: (row) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => {
                            setSelectedEstante(row);
                            setShowModal(true);
                        }}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                    >
                        Arquivos
                    </button>
                    <Link
                        href={route('coas.show', row.id)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                    >
                        Visualizar
                    </Link>
                    <Link
                        href={route('coas.edit', row.id)}
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
            <Head title="Coas" />

            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Coas</h2>
                        <Link
                            href={route('coas.create')}
                            className={`${styles.actionButton} ${styles.primaryButton}`}
                        >
                            Novo Coa
                        </Link>
                    </div>

                    <DataTable
                        columns={columns}
                        data={coas}
                    />

                    <Modal show={showModal} onClose={() => setShowModal(false)}>
                        <form onSubmit={handleSubmit} className="p-6">
                            <h2 className="text-lg flex justify-center font-bold mb-2">
                                ADICIONAR COA AO MEDICAMENTO
                            </h2>
                            <h2 className="text-lg flex justify-center font-medium mb-4">{selectedEstante?.nome_med} </h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Arquivo PDF
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={e => setData('pdf_file', e.target.files[0])}
                                    className="mt-1 block w-full"
                                    required
                                />
                                {errors.pdf_file && <div className="text-red-500 text-sm mt-1">{errors.pdf_file}</div>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Data de Criação
                                </label>
                                <input
                                    type="date"
                                    value={data.date_created_coa}
                                    onChange={e => setData('date_created_coa', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>

                            <div classNames="mb-4">
                                <div className={styles.inputGroup}>
                                    <InputLabel htmlFor="aprovado" value="Aprovado" />
                                    <select
                                        id="aprovado"
                                        value={data.aprovado}
                                        className={styles.select}
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setData('aprovado', selectedValue);
                                            console.log('Selected aprovado:', selectedValue); // For debugging
                                        }}
                                        required
                                    >
                                        <option value="">Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>
                                    </select>

                                    <InputError message={errors.aprovado} />
                                </div>
                            </div>

                            <div classNames="mb-4">
                                <div className={styles.inputGroup}>
                                    <InputLabel htmlFor="completo" value="Completo" />
                                    <select
                                        id="completo"
                                        value={data.completo}
                                        className={styles.select}
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setData('completo', selectedValue);
                                            console.log('Selected completo:', selectedValue); // For debugging
                                        }}
                                        required
                                    >
                                        <option value="">Selecione</option>
                                        <option value="Sim">Sim</option>
                                        <option value="Nao">Não</option>
                                    </select>

                                    <InputError message={errors.completo} />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Link do Arquivo
                                </label>
                                <input
                                    type="url"
                                    value={data.link_sclabs}
                                    onChange={e => setData('link_sclabs', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>

                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
