import React from 'react'

const specificationRows = [
	{ label: 'Efficiency', unit: '(m²/h)', values: ['3.000', '5.100', '6.000'] },
	{ label: 'GEL batteries', unit: '(nr/V-Ah)', values: ['2/12/140', '4/6/240-320', '4/6/240-320'] },
	{ label: 'Scrubbing path', unit: '(mm)', values: ['550', '850', '1.000'] },
	{ label: 'Total power', unit: '(W)', values: ['1.380', '2.190', '2.490'] },
	{ label: 'Power supply', unit: '-', values: ['BATTERY', 'BATTERY', 'BATTERY'] },
]

const columnTitles = ['WET 560 BA', 'WET 850 BA', 'WET 1000 BA']

const ISpecs = () => {
	return (
		<section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-7xl">
				<div className="flex items-center gap-4">
					<span className="h-px flex-1 bg-[#3f7bc3]" />
					<h2 className="whitespace-nowrap text-2xl font-medium uppercase tracking-[0.18em] text-[#3f7bc3] sm:text-3xl">
						Features
					</h2>
					<span className="h-px flex-1 bg-[#3f7bc3]" />
				</div>

				<div className="mt-10 overflow-x-auto">
					  <div style={{ minWidth: '920px' }} className="rounded-2xl border border-slate-200 bg-white">
						<div className="grid grid-cols-[1.25fr_0.7fr_repeat(3,1fr)] items-end border-b border-slate-200 px-4 py-7 text-center sm:px-6">
							<div />
							<div />
							{columnTitles.map((title) => (
								<div key={title} className="text-2xl font-medium text-slate-900">
									{title}
								</div>
							))}
						</div>

						{specificationRows.map((row) => (
							<div
								key={row.label}
								className="grid grid-cols-[1.25fr_0.7fr_repeat(3,1fr)] items-center border-b border-slate-200 px-4 py-7 text-center last:border-b-0 sm:px-6"
							>
								<div className="text-left text-xl font-normal text-slate-900">
									{row.label}
								</div>
								<div className="text-lg text-slate-700">{row.unit}</div>
								{row.values.map((value) => (
									<div key={value} className="text-xl font-normal text-slate-900">
										{value}
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ISpecs
