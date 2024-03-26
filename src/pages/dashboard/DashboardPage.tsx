import { Grid, Paper, Typography, useTheme } from '@mui/material';
import {
  SaiMinBarChart,
  SaiMinHalfPieChart,
  SaiMinLineChart,
  SaiMinPieChart,
  SaiMinScatterChart,
} from '@components/charts';
import { Center } from '@components/common/Center';
import { Calendar, Forms, Message, Snackbars } from './components';

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
      <Grid item xs={12} md={8}>
        <Message />
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper>
          <Calendar />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h3" marginTop={2}>
          Snackbars
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Snackbars />
      </Grid>

      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h3" marginTop={2}>
          Example Charts
        </Typography>
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

      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 1 }}>
          <Center width="100%" height={200}>
            <SaiMinPieChart />
          </Center>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 1 }}>
          <Center width="100%" height={200}>
            <SaiMinHalfPieChart />
          </Center>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 1 }}>
          <Center width="100%" height={200}>
            <SaiMinScatterChart />
          </Center>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h3" marginTop={2}>
          Example Form
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Forms />
      </Grid>
    </Grid>
  );
}
