import React from 'react'
import { 
    ShieldCheck, 
    CheckCircle2, 
    Bug, 
    Zap,
  } from "lucide-react";

const pestCatalog = [
    { name: "Cockroach Control", icon: Bug },
    { name: "Termite Treatment", icon: ShieldCheck },
    { name: "Rodent Control", icon: Zap },
    { name: "Bed Bug Removal", icon: CheckCircle2 },
    { name: "Mosquito Fogging", icon: ShieldCheck },
    { name: "Ant Management", icon: Bug },
  ];
const ServiceGrid = () => {
  return (
    <>
    <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Specific Targets</h3>
          <div className="w-16 h-1 bg-green-500 mt-2 mx-auto mb-12" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pestCatalog.map((pest, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all group">
                <pest.icon className="w-10 h-10 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-gray-800 text-sm">{pest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}

export default ServiceGrid