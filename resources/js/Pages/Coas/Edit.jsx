import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { tableStyles as styles } from '../../../css/global';

export default function Edit({ auth, coa }) {
    const { data, setData, post, processing, errors } = useForm({
        nome_med: coa.nome_med,
        tipo_med: coa.tipo_med,
        _method: 'PUT'
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('coas.update', coa.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Editar Estante" />

            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <h2 className="text-2xl font-semibold mb-6">Editar Estante</h2>

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
                                <option value="Oleo">Oleo</option>
                                <option value="Gummies">Gummies</option>
                                <option value="Nano Tecnologia">Nano Tecnologia</option>
                                <option value="Topico">Topico</option>
                            </select>
                            <InputError message={errors.tipo_med} />
                        </div>

                        <div className="flex items-center justify-end mt-6">
                            <button
                                type="submit"
                                className={`${styles.actionButton} ${styles.primaryButton}`}
                                disabled={processing}
                            >
                                Atualizar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
