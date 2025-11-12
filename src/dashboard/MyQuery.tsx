export default function MyQuery() {
  return (
    <div className="space-y-4 pt-2">
      <div className="rounded-xl bg-[#cfe0ff] p-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold">Have any questions or queries?</div>
            <p className="text-[12px] text-slate-700">Raise your query; we’re here to help!</p>
          </div>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/boy-is-studying-on-laptop-illustration-svg-download-png-8944721.png" className="h-20" />
        </div>
        <button className="mt-3 rounded-md border px-3 py-2">Raise a Query</button>
      </div>

      <div className="rounded-xl bg-white p-6 text-center text-slate-500 shadow">
        No Complaints Raised Yet!
      </div>
    </div>
  );
}
