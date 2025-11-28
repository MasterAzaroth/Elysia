export default function WeekdayPill({ weekday, date }) {
  return (
    <div className="w-10 h-16 flex flex-col items-center justify-center rounded-full p-2 bg-brand-purple1">
      <p className="text-sm mb-auto">{weekday}</p>
      <p className="text-sm">{date}</p>
    </div>
  );
}
