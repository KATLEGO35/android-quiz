import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { Data } from '../../app/Data';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  url = 'http://cit.eservices.gov.za/nvframework/rest/getallbysystem/ADMIN';  
  data: Data[];  
  Player = [];  
  Run = [];  
  Linechart = [];  

  constructor(private httpClient: HttpClient) { }  

  ngOnInit() {  
    this.httpClient.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.Player.push(x.firstname);  
        this.Run.push(x.surname);  
      });  
      this  
      this.Linechart = new Chart('canvas', {  
        type: 'line',  
        data: {  
          labels: this.Player,  

          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cb371',  
              backgroundColor: '#0000FF',  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
    });  
  }
}
