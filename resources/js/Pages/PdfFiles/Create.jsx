import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        pdf_file: null,
        date_created_coa: '',
        link_sclabs: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('pdf-files.store'), {
            forceFormData: true
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Novo Arquivo PDF" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6">Novo Arquivo PDF</h2>

                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="pdf_file" value="Arquivo PDF" />
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={e => setData('pdf_file', e.target.files[0])}
                                        className="mt-1 block w-full"
                                        required
                                    />
                                    <InputError message={errors.pdf_file} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="date_created_coa" value="Data de Criação" />
                                    <TextInput
                                        id="date_created_coa"
                                        type="date"
                                        name="date_created_coa"
                                        value={data.date_created_coa}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('date_created_coa', e.target.value)}
                                    />
                                    <InputError message={errors.date_created_coa} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="link_sclabs" value="Link do Arquivo" />
                                    <TextInput
                                        id="link_sclabs"
                                        type="url"
                                        name="link_sclabs"
                                        value={data.link_sclabs}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('link_sclabs', e.target.value)}
                                    />
                                    <InputError message={errors.link_sclabs} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Salvar
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
