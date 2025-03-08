import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { tableStyles as styles } from '../../../css/global';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        nome_med: '',
        tipo_med: '',
        pdf_file: null,
        date_created_coa: '',
        link_sclabs: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('coas.store'), {
            forceFormData: true
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Nova Estante" />

            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <h2 className="text-2xl font-semibold mb-6">Nova Estante</h2>

                    <form onSubmit={submit}>
                        <div className={styles.inputGroup}>
                            <InputLabel htmlFor="nome_med" value="Nome da Estante" />
                            <TextInput
                                id="nome_med"
                                type="text"
                                value={data.nome_med}
                                className="mt-1 block w-full"
                                onChange={(e) => setData('nome_med', e.target.value)}
                                required
                            />
                            <InputError message={errors.nome_med} />
                        </div>

                        <div className={styles.inputGroup}>
                            <InputLabel htmlFor="tipo_med" value="Local" />
                            <select
                                id="tipo_med"
                                value={data.tipo_med}
                                className={styles.select}
                                onChange={(e) => setData('tipo_med', e.target.value)}
                                required
                            >
                                <option value="">Selecione um local</option>
                                <option value="Oleo">Oleo</option>
                                <option value="Gummies">Gummies</option>
                                <option value="Nano">Nano</option>
                                <option value="Topico">Topico</option>
                            </select>
                            <InputError message={errors.tipo_med} />
                        </div>

                        <div className="mt-6 border-t pt-6">
                            <h3 className="text-lg font-medium mb-4">Adicionar Arquivo PDF (Opcional)</h3>

                            <div className={styles.inputGroup}>
                                <InputLabel htmlFor="pdf_file" value="Arquivo PDF" />
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={e => setData('pdf_file', e.target.files[0])}
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.pdf_file} />
                            </div>

                            <div className={styles.inputGroup}>
                                <InputLabel htmlFor="date_created_coa" value="Data de Criação do Arquivo" />
                                <TextInput
                                    id="date_created_coa"
                                    type="date"
                                    value={data.date_created_coa}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('date_created_coa', e.target.value)}
                                />
                                <InputError message={errors.date_created_coa} />
                            </div>

                            <div className={styles.inputGroup}>
                                <InputLabel htmlFor="aprovado" value="Local" />
                                <select
                                    id="aprovado"
                                    value={data.aprovado}
                                    className={styles.select}
                                    onChange={(e) => setData('aprovado', e.target.value)}
                                    required
                                >
                                    <option value="">Selecione um estado</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <InputError message={errors.aprovado} />
                            </div>

                            <div className={styles.inputGroup}>
                                <InputLabel htmlFor="completo" value="Local" />
                                <select
                                    id="completo"
                                    value={data.completo}
                                    className={styles.select}
                                    onChange={(e) => setData('completo', e.target.value)}
                                    required
                                >
                                    <option value="">Selecione um estado</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <InputError message={errors.completo} />
                            </div>

                            <div className={styles.inputGroup}>
                                <InputLabel htmlFor="drive_existe" value="Local" />
                                <select
                                    id="drive_existe"
                                    value={data.drive_existe}
                                    className={styles.select}
                                    onChange={(e) => setData('drive_existe', e.target.value)}
                                    required
                                >
                                    <option value="">Selecione um estado</option>
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>
                                <InputError message={errors.drive_existe} />
                            </div>

                            <div className={styles.inputGroup}>
                                <InputLabel htmlFor="link_sclabs" value="Link do Arquivo" />
                                <TextInput
                                    id="link_sclabs"
                                    type="url"
                                    value={data.link_sclabs}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('link_sclabs', e.target.value)}
                                />
                                <InputError message={errors.link_sclabs} />
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-6">
                            <button
                                type="submit"
                                className={`${styles.actionButton} ${styles.primaryButton}`}
                                disabled={processing}
                            >
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
