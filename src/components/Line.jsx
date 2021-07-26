import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'japan',
    color: 'hsl(227, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 89,
      },
      {
        x: 'helicopter',
        y: 138,
      },
      {
        x: 'boat',
        y: 262,
      },
      {
        x: 'train',
        y: 132,
      },
      {
        x: 'subway',
        y: 206,
      },
      {
        x: 'bus',
        y: 288,
      },
      {
        x: 'car',
        y: 177,
      },
      {
        x: 'moto',
        y: 169,
      },
      {
        x: 'bicycle',
        y: 261,
      },
      {
        x: 'horse',
        y: 98,
      },
      {
        x: 'skateboard',
        y: 106,
      },
      {
        x: 'others',
        y: 207,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(18, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 267,
      },
      {
        x: 'helicopter',
        y: 224,
      },
      {
        x: 'boat',
        y: 62,
      },
      {
        x: 'train',
        y: 93,
      },
      {
        x: 'subway',
        y: 189,
      },
      {
        x: 'bus',
        y: 107,
      },
      {
        x: 'car',
        y: 194,
      },
      {
        x: 'moto',
        y: 296,
      },
      {
        x: 'bicycle',
        y: 270,
      },
      {
        x: 'horse',
        y: 76,
      },
      {
        x: 'skateboard',
        y: 232,
      },
      {
        x: 'others',
        y: 190,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(164, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 299,
      },
      {
        x: 'helicopter',
        y: 196,
      },
      {
        x: 'boat',
        y: 63,
      },
      {
        x: 'train',
        y: 88,
      },
      {
        x: 'subway',
        y: 174,
      },
      {
        x: 'bus',
        y: 50,
      },
      {
        x: 'car',
        y: 285,
      },
      {
        x: 'moto',
        y: 44,
      },
      {
        x: 'bicycle',
        y: 8,
      },
      {
        x: 'horse',
        y: 287,
      },
      {
        x: 'skateboard',
        y: 164,
      },
      {
        x: 'others',
        y: 298,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(279, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 292,
      },
      {
        x: 'helicopter',
        y: 139,
      },
      {
        x: 'boat',
        y: 99,
      },
      {
        x: 'train',
        y: 132,
      },
      {
        x: 'subway',
        y: 287,
      },
      {
        x: 'bus',
        y: 199,
      },
      {
        x: 'car',
        y: 57,
      },
      {
        x: 'moto',
        y: 180,
      },
      {
        x: 'bicycle',
        y: 127,
      },
      {
        x: 'horse',
        y: 290,
      },
      {
        x: 'skateboard',
        y: 14,
      },
      {
        x: 'others',
        y: 253,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(335, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 201,
      },
      {
        x: 'helicopter',
        y: 281,
      },
      {
        x: 'boat',
        y: 17,
      },
      {
        x: 'train',
        y: 200,
      },
      {
        x: 'subway',
        y: 79,
      },
      {
        x: 'bus',
        y: 185,
      },
      {
        x: 'car',
        y: 136,
      },
      {
        x: 'moto',
        y: 248,
      },
      {
        x: 'bicycle',
        y: 162,
      },
      {
        x: 'horse',
        y: 89,
      },
      {
        x: 'skateboard',
        y: 251,
      },
      {
        x: 'others',
        y: 59,
      },
    ],
  },
];

const Line = ({ curve, enablePoints, enableArea }) => (
  <ResponsiveLine
    data={data}
    curve={curve}
    enablePoints={enablePoints}
    enableArea={enableArea}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Line;
