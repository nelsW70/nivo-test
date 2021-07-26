import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    key1: 9512.0976,
    key2: 4000.0032,
    key3: 3.4515,
    key4: 107.1447,
    key5: 4000.0032,
    key6: 0,
    key7: 0,
    key8: 321.4296,
    time: '2019-04',
  },
];

const SimpleBar = () => {
  return (
    <ResponsiveBar
      indexBy="time"
      groupMode="grouped"
      data={data}
      keys={['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8']}
      indexBy="time"
      margin={{
        top: 50,
        right: 130,
        bottom: 50,
        left: 60,
      }}
      padding={0.3}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="inherit:darker(1.6)"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
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
};

export default SimpleBar;
