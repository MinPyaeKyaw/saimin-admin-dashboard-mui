import { useEffect, useState } from 'react';
import { BarChart, BarSeriesType } from '@mui/x-charts';
import { MakeOptional } from '@mui/x-charts/models/helpers';

interface Props {
  data: BarChartDataType[];
  width?: number;
  height?: number;
}

export function SaiMinBarChart({ data, width, height }: Props) {
  const [colors, setColors] = useState<string[]>([]);
  const [xLabels, setXLabels] = useState<string[]>([]);
  const [series, setSeries] = useState<MakeOptional<BarSeriesType, 'type'>[]>(
    []
  );

  useEffect(() => {
    // getting xlabel values from data(props)
    let xlabelData: string[] = [];
    data.forEach((eachData, i) => {
      if (i === 0) {
        xlabelData = eachData.data.map((d) => {
          return d.xLabel;
        });
      } else {
        eachData.data.forEach((d) => {
          if (!xlabelData.includes(d.xLabel)) xlabelData.push(d.xLabel);
        });
      }
    });
    setXLabels(xlabelData);

    // getting series data and colors from data(props)
    const colorData: string[] = [];
    const seriesData: MakeOptional<BarSeriesType, 'type'>[] = [];
    data.forEach((eachData) => {
      colorData.push(eachData.color);
      seriesData.push({
        data: eachData.data.map((d) => d.value),
        label: eachData.label,
        id: eachData.id,
      });
    });
    setColors(colorData);
    setSeries(seriesData);
  }, [data]);

  return (
    <BarChart
      colors={colors}
      width={width} // If the width is not specified, it's 100%.
      height={height}
      series={series}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
