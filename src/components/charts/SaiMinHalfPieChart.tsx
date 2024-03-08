import { useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts';

export function SaiMinHalfPieChart() {
  const theme = useTheme();
  const data = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
  ];

  return (
    <PieChart
      colors={[theme.palette.primary.main, theme.palette.secondary.main]}
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          paddingAngle: 5,
          innerRadius: 60,
          outerRadius: 80,
          data,
        },
      ]}
      margin={{ right: 5 }}
      width={200}
      height={200}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}
