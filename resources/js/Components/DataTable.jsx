import { useState, useEffect } from "react";

export default function DataTable({ columns, data, searchable = true }) {
    const [filteredData, setFilteredData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const itemsPerPageOptions = [5, 10, 25, 50];

    useEffect(() => {
        const results = data.filter(item =>
            Object.values(item)
                .join(' ')
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
        setCurrentPage(1);
    }, [data, searchTerm]);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortColumn) return 0;
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = sortedData.slice(startIndex, endIndex);

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                {searchable && (
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="w-full sm:w-64 px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                )}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">Itens por página:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                        className="px-2 py-1 border rounded-md shadow-sm"
                    >
                        {itemsPerPageOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className={`px-6 py-3 text-left text-ls font-medium text-gray-500 uppercase tracking-wider
                                            ${index === 0 ? "bg-gray-50 shadow-md z-10" : ""}`} // adionar isso no começo para travar a primeira coluna 'sticky left-0' adicionar também na linha de baixo onde diz colIndex
                                        onClick={() => handleSort(column.accessor)}
                                    >
                                        {column.header}
                                        {sortColumn === column.accessor ? (
                                            sortDirection === 'asc' ? ' 🔼' : ' 🔽'
                                        ) : null}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {currentData.map((item, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-50">
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-6 py-2 text-xs font-menium text-gray-700 uppercase whitespace-nowrap ${colIndex === 0 ? "bg-white shadow-md z-10" : ""}`}
                                        >
                                            {column.render ? column.render(item) : item[column.accessor]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-white px-4 py-3 border-t border-gray-200 rounded-lg shadow">
                <span className="text-sm text-gray-700">
                    Mostrando {startIndex + 1} até {Math.min(endIndex, sortedData.length)} de {sortedData.length} resultados
                </span>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300"
                    >
                        Primeira
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300"
                    >
                        Anterior
                    </button>
                    <span className="px-4 py-2">
                        Página {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300"
                    >
                        Próxima
                    </button>
                    <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-sm rounded-md border bg-gray-100 hover:bg-gray-200 disabled:bg-gray-300"
                    >
                        Última
                    </button>
                </div>
            </div>
        </div>
    );
}
