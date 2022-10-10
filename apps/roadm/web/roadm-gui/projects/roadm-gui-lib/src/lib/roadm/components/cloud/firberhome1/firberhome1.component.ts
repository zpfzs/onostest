import { Component, OnInit } from '@angular/core';
declare var echarts:any;
@Component({
  selector: 'roadm-app-firberhome1',
  templateUrl: './firberhome1.component.html',
  styleUrls: ['./firberhome1.component.css']
})
export class Firberhome1Component implements OnInit {

  public pic3 = "https://pic4.zhimg.com/80/v2-207e1cf40966e6f3f18fd6558015de3f_720w.jpg";
  public option1:any;
  public option2:any;
  public option3:any;
  public adress:string="10.112.231.75";
  public mirror_image:any[]=["[datastore1] ubuntu-20.04.3-desktop-amd64.iso","[datastore1] ubuntu-18.04.1-desktop-amd64.iso","[datastore1] ubuntu-18.04.5-desktop-amd64.iso","[datastore1] ubuntu-20.04.1-desktop-amd64.iso"]
  public vm:any={
    name:"",
    cpu:"",
    memory:"",
    disk:"",
    ip:"",
    image:"",
    status:""
  }
  public creat_form:any={
    name:"",
    cpu:"",
    memory:"",
    disk:"",
    image:""
  }
  public vmlist:any[]=[];
  constructor() { }

  ngOnInit() {
    let myChart1=echarts.init(document.getElementById('bar1'));
                  this.option1 = {
                      tooltip: {
                        trigger: 'item'
                      },
                      legend: {
                        top: '5%',
                        left: 'center'
                      },
                      series: [
                        {
                          name: 'Access From',
                          type: 'pie',
                          radius: ['40%', '70%'],
                          avoidLabelOverlap: false,
                          label: {
                            show: false,
                            position: 'center'
                          },
                          emphasis: {
                            label: {
                              show: true,
                              fontSize: '40',
                              fontWeight: 'bold'
                            }
                          },
                          labelLine: {
                            show: false
                          },
                          data: [
                            { value: 700, name: '占用' },
                            { value: 300, name: '空闲' }
                          ]
                        }
                      ]
                  };
                  myChart1.setOption(this.option1);

    let myChart2=echarts.init(document.getElementById('bar2'));
                      this.option2 = {
                          tooltip: {
                            trigger: 'item'
                          },
                          legend: {
                            top: '5%',
                            left: 'center'
                          },
                          series: [
                            {
                              name: 'Access From',
                              type: 'pie',
                              radius: ['40%', '70%'],
                              avoidLabelOverlap: false,
                              label: {
                                show: false,
                                position: 'center'
                              },
                              emphasis: {
                                label: {
                                  show: true,
                                  fontSize: '40',
                                  fontWeight: 'bold'
                                }
                              },
                              labelLine: {
                                show: false
                              },
                              data: [
                                { value: 650, name: '占用' },
                                { value: 350, name: '空闲' }
                              ]
                            }
                          ]
                      };
                      myChart2.setOption(this.option2);

    let myChart3=echarts.init(document.getElementById('bar3'));
                      this.option3 = {
                          tooltip: {
                            trigger: 'item'
                          },
                          legend: {
                            top: '5%',
                            left: 'center'
                          },
                          series: [
                            {
                              name: 'Access From',
                              type: 'pie',
                              radius: ['40%', '70%'],
                              avoidLabelOverlap: false,
                              label: {
                                show: false,
                                position: 'center'
                              },
                              emphasis: {
                                label: {
                                  show: true,
                                  fontSize: '40',
                                  fontWeight: 'bold'
                                }
                              },
                              labelLine: {
                                show: false
                              },
                              data: [
                                { value: 600, name: '占用' },
                                { value: 400, name: '空闲' }
                              ]
                            }
                          ]
                      };
                      myChart3.setOption(this.option3);
  }

}
