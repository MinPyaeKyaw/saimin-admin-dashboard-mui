import { Grid, Paper, useTheme } from '@mui/material';
import {
  SaiMinBarChart,
  SaiMinLineChart,
  SaiMinPieChart,
} from '@components/charts';
import { Message } from './components';

export function DashboardPage() {
  const theme = useTheme();

  const BARCHART_DATA = [
    {
      color: theme.palette.primary.main,
      id: 'pvId',
      label: 'pv',
      data: [
        {
          xLabel: 'Page A',
          value: 2400,
        },
        {
          xLabel: 'Page B',
          value: 1300,
        },
        {
          xLabel: 'Page C',
          value: 3000,
        },
        {
          xLabel: 'Page D',
          value: 6000,
        },
        {
          xLabel: 'Page E',
          value: 2000,
        },
        {
          xLabel: 'Page F',
          value: 9000,
        },
        {
          xLabel: 'Page G',
          value: 1000,
        },
      ],
    },
    {
      color: theme.palette.secondary.main,
      id: 'uvId',
      label: 'uv',
      data: [
        {
          xLabel: 'Page A',
          value: 1400,
        },
        {
          xLabel: 'Page B',
          value: 2300,
        },
        {
          xLabel: 'Page C',
          value: 3000,
        },
        {
          xLabel: 'Page D',
          value: 7000,
        },
        {
          xLabel: 'Page E',
          value: 3000,
        },
        {
          xLabel: 'Page F',
          value: 7000,
        },
        {
          xLabel: 'Page G',
          value: 2000,
        },
      ],
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper sx={{ padding: 1 }}>
          <Message />
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper sx={{ padding: 1 }}>
          <Message />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 1 }}>
          <SaiMinBarChart data={BARCHART_DATA} height={300} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 1 }}>
          <SaiMinLineChart data={BARCHART_DATA} height={300} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 1 }}>
          <SaiMinPieChart />
        </Paper>
      </Grid>
    </Grid>
  );
}
