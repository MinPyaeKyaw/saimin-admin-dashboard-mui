import { useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts';

export function SaiMinPieChart() {
  const theme = useTheme();

  return (
    <PieChart
      colors={[theme.palette.primary.main, theme.palette.secondary.main]}
      series={[
        {
          paddingAngle: 5,
          innerRadius: 60,
          outerRadius: 80,
          data: [
            { label: 'Group A', value: 400 },
            { label: 'Group B', value: 300 },
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
