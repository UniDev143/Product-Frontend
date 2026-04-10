import React from 'react'

const SideNav = ({ items, activeItemId, onChange }) => {
  return (
    <aside className="rounded-xl bg-[#ececec] p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)]">
      <p className="px-1 text-[15px] text-slate-700">Home &gt; Products&gt;</p>

      <nav className="mt-2.5 flex flex-col gap-2" aria-label="Products sidebar">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`w-full rounded-lg px-3 py-2.5 text-left text-[14px] font-semibold transition-colors ${
              activeItemId === item.id
                ? 'bg-[#129ed6] text-white'
                : 'bg-transparent text-slate-900 hover:bg-[#dfdfdf]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default SideNav
