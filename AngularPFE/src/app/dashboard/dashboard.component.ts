import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'chartDemo';
  ngOnInit()
  {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['happy', 'sad', 'fear', 'surprise', 'angry', 'naturel'],
          datasets: [{
              label: 'Data1',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 1
          },
          {
            label: 'Dat21',
            data: [19, 12, 5, 3, 1, 6],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
