import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { HParent } from "./house.styles";
Chart.register(ChartDataLabels); // Register the datalabels plugin for every charts

const House = () => {
   
    return (
        <HParent>
    <Bar
        data={{
            labels: ["George Bon", "John Osai", "Bankole Wellington", "Iferanmi Ade", "Thaddeus Attah"],
            datasets: [
                {
                    label: "Top 5 Alimosho House of rep candidate 2023",
                    backgroundColor: ["#B8D315","#005C2B", "#E18802", "#025BE1", "#BF238A"],
                    borderWidth: 1,
                    hoverBackgroundColor: "#D9D9D9",
                    data: [40, 30, 20, 8, 2],
                    borderRadius: 2 // Make Rectangle rounded
                }
            ]
        }}
        options={{
            indexAxis: "y", // Horizontal bar
            plugins: {
                datalabels: {
                    formatter: value => value + " %", // Add the percentage after the value
                    align: "end",
                    anchor: "end",
                    clip: true // Hide label if outside of the chart
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false // Hide x grid
                    }
                },
                y: {
                    grid: {
                        display: false // Hide y grid
                    }
                }
            }
        }}
    />
    </HParent>
)


}

export default House;