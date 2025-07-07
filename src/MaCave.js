import React, { useState } from 'react';

export default function MaCave() {
  const referencesMyriam = [
    { nom: 'Château Margaux', millesime: '2015', stock: 12, prix: 250 },
    { nom: 'Sancerre Blanc', millesime: '2020', stock: 30, prix: 18.5 },
    { nom: 'Crozes-Hermitage', millesime: '2018', stock: 18, prix: 22 },
  ];

  const [mesVins, setMesVins] = useState([]);
  const [formData, setFormData] = useState({ nom: '', millesime: '', stock: '', prix: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const ajouterVin = () => {
    if (!formData.nom || !formData.millesime || !formData.stock || !formData.prix) return;
    setMesVins([...mesVins, formData]);
    setFormData({ nom: '', millesime: '', stock: '', prix: '' });
  };

  const supprimerVin = (index) => {
    const updated = [...mesVins];
    updated.splice(index, 1);
    setMesVins(updated);
  };

  return (
    <div className="space-y-8 p-6 bg-[#FAF7EF] min-h-screen">
      <h1 className="text-3xl font-bold text-[#6D1C35]">📦 Ma cave à vin</h1>

      <section className="bg-white p-4 rounded-xl shadow border border-[#6D1C35]/10">
        <h2 className="text-xl font-semibold text-[#6D1C35] mb-2">Références proposées par Myriam</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Nom</th>
              <th>Millesime</th>
              <th>Stock</th>
              <th>Prix (€)</th>
            </tr>
          </thead>
          <tbody>
            {referencesMyriam.map((vin, index) => (
              <tr key={index} className="border-b">
                <td className="py-1">{vin.nom}</td>
                <td>{vin.millesime}</td>
                <td>{vin.stock}</td>
                <td>{vin.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white p-4 rounded-xl shadow border border-[#6D1C35]/10 space-y-4">
        <h2 className="text-xl font-semibold text-[#6D1C35]">Ajouter vos propres références</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <input name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" className="border p-2 rounded" />
          <input name="millesime" value={formData.millesime} onChange={handleChange} placeholder="Millesime" className="border p-2 rounded" />
          <input name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="border p-2 rounded" />
          <input name="prix" value={formData.prix} onChange={handleChange} placeholder="Prix (€)" className="border p-2 rounded" />
          <button onClick={ajouterVin} className="bg-[#6D1C35] text-white rounded px-4 py-2">Ajouter</button>
        </div>

        <table className="w-full text-sm mt-4">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Nom</th>
              <th>Millesime</th>
              <th>Stock</th>
              <th>Prix (€)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mesVins.map((vin, index) => (
              <tr key={index} className="border-b">
                <td className="py-1">{vin.nom}</td>
                <td>{vin.millesime}</td>
                <td>{vin.stock}</td>
                <td>{vin.prix}</td>
                <td>
                  <button onClick={() => supprimerVin(index)} className="text-sm text-red-500">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}