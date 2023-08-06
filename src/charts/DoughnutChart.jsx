import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {  useSelector } from "react-redux";





const DoughnutChart = () => {

  const chartValues = useSelector((state) => state.chart);


const newArr = chartValues.map(item => Object.values(item)[1]) 


  ChartJS.register(
    ArcElement, Tooltip, Legend
  );
  
   const data = {
    labels: ["Users", "Posts", "Comments", "Todos"],
    datasets: [{
      data: newArr,
      backgroundColor: [
        "rgba(14,12, 250,0.4)",
        "rgba(55,206, 86,0.4)",
        "rgba(45,162, 132,0.4)",
        "rgba(105,15, 255,0.4)",
      ],
      borderColor: [
        "rgba(4,12, 200,0.8)",
        "rgba(55,206, 86,0.8)",
        "rgba(45,162, 132,0.8)",
        "rgba(75,15, 255,0.8)",
      ],
      borderWidth: 0.7,
    }],
   };

  return (
   <>
     <h1 style={{textAlign:"center",marginBottom:"20px"}}>Doughnut Chart</h1>
     <div style={{width:"500px", margin:"0 auto"}} >
      <Doughnut data={data}>
      </Doughnut>
     </div>
   </>
  )
}

export default DoughnutChart