import {Component, OnInit} from '@angular/core';
declare var echarts:any;
@Component({
    selector: 'roadm-app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public option5:any;
  public Device_Connection: any[] = [
    {
      name: "Optical Switching Node 1",
      status: 1
    },
    {
      name: "Optical Switching Node 2",
      status: 1
    },
    {
      name: "Optical Switching Node 3",
      status: 1
    },
    {
      name: "Optical Switching Node 4",
      status: 1
    },
    {
      name: "Openstack of HUST",
      status: 0
    },
    {
      name: "FitOs of FiberHome",
      status: 0
    },
    {
      name: "DCN Controller",
      status: 0
    },
    {
      name: "DCI Controller",
      status: 0
    },
    {
      name: "Openstack of FiberHome",
      status: 0
    },
  ];
  public pic1 = "https://pic2.zhimg.com/80/v2-2735ab2e37cc8b795407285ed3c1d476_720w.jpg?source=d16d100b";
  public pic2 = "https://pic3.zhimg.com/80/v2-543b14f8d4139a9a120e64ab2f202bdb_720w.jpg?source=d16d100b";
  public pic3 = "https://pic4.zhimg.com/80/v2-207e1cf40966e6f3f18fd6558015de3f_720w.jpg";
  public pic4 = "https://pic2.zhimg.com/80/v2-6a199090420dd44a028c0bab10995b8e_720w.jpg?source=d16d100b";
  public general_situation: any[] = [
    {
      device_name:"host-1",
      category:"host",
      IP:"10.190.85.31",
      authority:"root/fhrootroot",
      running_state: -1
    },
    {
      device_name:"host-2",
      category:"host",
      IP:"10.190.85.32",
      authority:"root/fhrootroot",
      running_state: -1
    },
    {
      device_name:"host-3",
      category:"host",
      IP:"10.190.85.33",
      authority:"root/fhrootroot",
      running_state: -1
    },
    {
      device_name:"host-4",
      category:"host",
      IP:"10.190.85.34",
      authority:"root/fhrootroot",
      running_state: -1
    },
    {
      device_name:"host-5",
      category:"host",
      IP:"10.190.85.35",
      authority:"root/fhrootroot",
      running_state: -1
    },
    {
      device_name:"host-6",
      category:"host",
      IP:"10.190.85.36",
      authority:"root/fhrootroot",
      running_state: -1
    },
    {
      device_name:"host-7",
      category:"host",
      IP:"10.190.85.37",
      authority:"root/fhrootroot",
      running_state: -1
    },
  ]
  public other_device:any[]=[
    {
      name:"Number of VNE",
      number:129,
      pic:"https://pic4.zhimg.com/80/v2-b022ab8c28bc56aadbeb0744a14e31b7_1440w.jpg"
    },
    {
      name:"Number of service",
      number:3,
      pic:"https://pic4.zhimg.com/80/v2-3f8fcf184e5d8f49c5bfe643bfc80f7f_1440w.jpg"
    },
  ]

  constructor() { }

  ngOnInit() {
    let myChart5=echarts.init(document.getElementById('bar1'));
              this.option5 = {
                legend: {},
                tooltip: {},
                dataset: {
                  source: [
                    ['', 'CPU', 'RAM', 'HDD'],
                    ['Server1', 43.3, 85.8, 93.7],
                    ['Server2', 83.1, 73.4, 55.1],
                    ['Local', 86.4, 65.2, 82.5],
                  ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
              };
              myChart5.setOption(this.option5);
  }


}

