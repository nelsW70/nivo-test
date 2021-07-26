import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    country: 'AD',
    'hot dog': 73,
    'hot dogColor': 'hsl(14, 70%, 50%)',
    burger: 38,
    burgerColor: 'hsl(41, 70%, 50%)',
    sandwich: 172,
    sandwichColor: 'hsl(284, 70%, 50%)',
    kebab: 15,
    kebabColor: 'hsl(104, 70%, 50%)',
    fries: 96,
    friesColor: 'hsl(113, 70%, 50%)',
    donut: 124,
    donutColor: 'hsl(122, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 126,
    'hot dogColor': 'hsl(157, 70%, 50%)',
    burger: 39,
    burgerColor: 'hsl(248, 70%, 50%)',
    sandwich: 25,
    sandwichColor: 'hsl(318, 70%, 50%)',
    kebab: 31,
    kebabColor: 'hsl(198, 70%, 50%)',
    fries: 167,
    friesColor: 'hsl(87, 70%, 50%)',
    donut: 1,
    donutColor: 'hsl(19, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 127,
    'hot dogColor': 'hsl(283, 70%, 50%)',
    burger: 44,
    burgerColor: 'hsl(4, 70%, 50%)',
    sandwich: 172,
    sandwichColor: 'hsl(239, 70%, 50%)',
    kebab: 8,
    kebabColor: 'hsl(250, 70%, 50%)',
    fries: 161,
    friesColor: 'hsl(65, 70%, 50%)',
    donut: 72,
    donutColor: 'hsl(62, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 119,
    'hot dogColor': 'hsl(343, 70%, 50%)',
    burger: 56,
    burgerColor: 'hsl(134, 70%, 50%)',
    sandwich: 16,
    sandwichColor: 'hsl(195, 70%, 50%)',
    kebab: 41,
    kebabColor: 'hsl(19, 70%, 50%)',
    fries: 160,
    friesColor: 'hsl(189, 70%, 50%)',
    donut: 100,
    donutColor: 'hsl(317, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 109,
    'hot dogColor': 'hsl(262, 70%, 50%)',
    burger: 54,
    burgerColor: 'hsl(237, 70%, 50%)',
    sandwich: 38,
    sandwichColor: 'hsl(331, 70%, 50%)',
    kebab: 200,
    kebabColor: 'hsl(350, 70%, 50%)',
    fries: 45,
    friesColor: 'hsl(356, 70%, 50%)',
    donut: 47,
    donutColor: 'hsl(4, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 191,
    'hot dogColor': 'hsl(49, 70%, 50%)',
    burger: 73,
    burgerColor: 'hsl(179, 70%, 50%)',
    sandwich: 5,
    sandwichColor: 'hsl(155, 70%, 50%)',
    kebab: 36,
    kebabColor: 'hsl(7, 70%, 50%)',
    fries: 72,
    friesColor: 'hsl(117, 70%, 50%)',
    donut: 200,
    donutColor: 'hsl(248, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 195,
    'hot dogColor': 'hsl(63, 70%, 50%)',
    burger: 54,
    burgerColor: 'hsl(336, 70%, 50%)',
    sandwich: 63,
    sandwichColor: 'hsl(270, 70%, 50%)',
    kebab: 97,
    kebabColor: 'hsl(223, 70%, 50%)',
    fries: 2,
    friesColor: 'hsl(41, 70%, 50%)',
    donut: 59,
    donutColor: 'hsl(144, 70%, 50%)',
  },
];

const Bar = ({ grouped, layout }) => (
  <ResponsiveBar
    data={data}
    groupMode={grouped}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    layout={layout}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    valueFormat={{ format: '', enabled: false }}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Bar;
