type Cell = boolean | "partial";

const rows: { name: string; note: string; cells: Cell[] }[] = [
  {
    name: "传统桌宠",
    note: "QQ 宠物、Shimeji",
    cells: [true, false, false],
  },
  {
    name: "AI 陪伴产品",
    note: "Character.AI、星野",
    cells: [false, false, true],
  },
  {
    name: "形象生成工具",
    note: "Tripo、Meshy、即梦",
    cells: [false, true, false],
  },
];

const columns = ["桌面常驻", "生成专属形象", "可变人格"];

function Mark({ value }: { value: Cell }) {
  if (value === true) {
    return <span className="text-emerald-600 dark:text-emerald-400">✓</span>;
  }
  if (value === "partial") {
    return <span className="text-amber-600 dark:text-amber-400">△</span>;
  }
  return <span className="text-zinc-300 dark:text-zinc-700">—</span>;
}

export function Compare() {
  return (
    <section id="compare" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          为什么是芯宠
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          市面上的产品各占一角：桌宠会动但没有 AI 人格，AI 陪伴会聊但没有形象，
          生成工具能出图却只是个工具。
          <span className="text-zinc-900 dark:text-zinc-100">
            「高情感陪伴 × 高外观个性化」这个位置，目前是空的。
          </span>
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-zinc-500 dark:text-zinc-400">
                <th className="pb-4 font-normal">产品类型</th>
                {columns.map((c) => (
                  <th key={c} className="pb-4 text-center font-normal">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-t border-zinc-200 dark:border-zinc-800">
                  <td className="py-4">
                    <div>{r.name}</div>
                    <div className="text-xs text-zinc-400">{r.note}</div>
                  </td>
                  {r.cells.map((c, i) => (
                    <td key={i} className="py-4 text-center text-lg">
                      <Mark value={c} />
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="border-t border-zinc-200 bg-rose-50/60 dark:border-zinc-800 dark:bg-rose-500/5">
                <td className="py-4">
                  <div className="font-medium">芯宠</div>
                  <div className="text-xs text-zinc-400">目标位</div>
                </td>
                {[true, true, true].map((c, i) => (
                  <td key={i} className="py-4 text-center text-lg">
                    <Mark value={c} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
