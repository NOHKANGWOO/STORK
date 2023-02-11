import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BabyChart = (props) => {
  const { crl, ac, fl, week } = props;

  const flmean = [
    1.77, 2.03, 2.34, 2.71, 2.99, 3.39, 3.67, 3.91, 4.07, 4.24, 4.42, 4.62,
    5.01, 5.37, 5.56, 5.72, 5.9, 6.01, 6.14, 6.34, 6.46, 6.37, 6.71, 6.79,
  ];

  const acmean = [
    9.81, 11.05, 11.91, 13.06, 14.4, 15.38, 16.29, 17.37, 18.48, 19.53, 20.16,
    21.5, 22.59, 23.63, 24.6, 25.76, 26.47, 27.44, 28.42, 28.82, 29.78, 30.02,
    31.4, 31.27,
  ];

  const crlmean = [
    9.5, 10.9, 12.4, 14, 15, 16.2, 17.1, 18.1, 19.1, 20.1, 21.1, 22.1, 23.1,
    24.1, 25, 26.1, 27.0, 28.5, 29.8, 30.6, 31.6, 32.7, 33.1, 37.8, 35.8,
  ];

  const num = parseInt(week) - 15;
  console.log(num);
  //   Math.abs(parseFloat(parCrl)),
  const data = [
    {
      name: "CRL",
      아이: parseFloat(crl),
      평균: parseFloat(crlmean[num]),
    },
    {
      name: "AC",
      아이: parseFloat(ac),
      평균: parseFloat(acmean[num]),
    },
    {
      name: "FL",
      아이: parseFloat(fl),
      평균: parseFloat(flmean[num]),
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 0,
          left: -15,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          scale="auto"
          style={{
            fontSize: "0.8rem",
            fontFamily: "Arial",
          }}
        />
        <YAxis
          style={{
            fontSize: "0.8rem",
            fontFamily: "Arial",
          }}
        />

        <Bar dataKey="아이" barSize={30} fill="#EA7171" />
        <Bar dataKey="평균" barSize={30} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BabyChart;
