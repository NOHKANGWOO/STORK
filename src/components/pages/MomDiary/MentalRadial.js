import ApexChart from "react-apexcharts";

const Radialbar = (props) => {
  const donutData = {
    series: [props.val],
    options: {
      chart: {
        type: "radialBar",
      },
      labels: [""],
      colors: [
        function () {
          if (donutData.series < 30) {
            return "#F5A9A9";
          } else if (donutData.series < 70) {
            return "#F2F5A9";
          } else {
            return "#A9D0F5";
          }
        },
      ],
      plotOptions: {
        radialBar: {
          offsetY: -37,
          track: {
            background: "#D9D9D9",
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#B2B2B2",
              fontSize: "15px",
            },
            value: {
              offsetY: -1,
              color: "#B2B2B2",
              fontSize: "40px",
              color: "#EA7171",
              fontWeight: "bold",
              show: true,
            },
          },
        },
      },
    },
  };
  return (
    <div>
      <ApexChart
        options={donutData.options}
        series={donutData.series}
        type="radialBar"
        width={220}
        height={320}
      />
    </div>
  );
};

export default Radialbar;
