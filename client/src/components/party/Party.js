import { Chart } from "chart.js";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { PartyParent } from "./party.styles";
Chart.register(ChartDataLabels); // Register the datalabels plugin for every charts

const Party = () => {
   
    return (
        <PartyParent>
    <Bar
        data={{
            labels: ["Abia", "Adamawa", "Akwa-Ibom", "Anambra", "Bauchi", "Bayelsa"],
            datasets: [
                {
                    label: "APC",
                    backgroundColor: ["#025BE1","#025BE1", "#025BE1"],
                    borderWidth: 1,
                    hoverBackgroundColor: "#D9D9D9",
                    data: [80, 80, 80, 80, 80, 80],
                    borderRadius: 2 // Make Rectangle rounded
                },
                {
                    label: "LP",
                    backgroundColor: ["#CF9D3A","#CF9D3A", "#CF9D3A"],
                    borderWidth: 1,
                    hoverBackgroundColor: "#D9D9D9",
                    data: [40, 40, 40, 40, 40, 40],
                    borderRadius: 2 // Make Rectangle rounded
                },
                {
                    label: "PDP",
                    backgroundColor: ["#00A52E","#00A52E", "#00A52E"],
                    borderWidth: 1,
                    hoverBackgroundColor: "#D9D9D9",
                    data: [30, 30, 30, 30, 30, 30],
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
    </PartyParent>
)


}

export default Party;