import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        axios.get(route("dashboard.stats"))
            .then((response) => {
                setStats(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados:", error);
            });
    }, []);

    if (!stats) {
        return <div className="text-center text-lg font-semibold py-10">Carregando...</div>;
    }

    // Definição dos dados para os gráficos
    const barData = [
        { name: "COAs", total: stats.total_coas },
        { name: "PDFs", total: stats.total_pdf_files },
    ];

    const statusData = [
        { name: "Aprovados", value: stats.aprovados },
        { name: "Não Aprovados", value: stats.nao_aprovados },
        { name: "Completos", value: stats.completos },
        { name: "Não Completos", value: stats.nao_completos },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* 📊 Gráfico de Barras Verticais*/}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Total de Registros</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={barData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="total" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* 📊 Gráfico de Barras Horizontais*/}
                        <div className="bg-white shadow-md rounded-lg p-6 lg:col-span-2">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Status dos PDFs</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart layout="vertical" data={statusData} margin={{ left: 80 }}> {/* Aumentando a margem esquerda */}
                                    <XAxis type="number" />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        tick={{ fontSize: '14px' }}
                                        width={120}  // Aumentando largura do eixo Y
                                    />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>


                        {/* 🥧 Gráfico de Pizza*/}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribuição de Status</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={statusData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
