import { PieChart } from '@mui/x-charts';

export function SaiMinPieChart() {
  return (
    <PieChart
      series={[
        {
          paddingAngle: 5,
          innerRadius: 60,
          outerRadius: 80,
          data: [
            { label: 'Group A', value: 400 },
            { label: 'Group B', value: 300 },
            { label: 'Group C', value: 300 },
            { label: 'Group D', value: 200 },
          ],
        },
      ]}
      margin={{ right: 5 }}
      width={200}
      height={200}
      legend={{ hidden: true }}
    />
  );
}
