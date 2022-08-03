import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { XinjiangdataService } from '../../../../roadm/services/xinjiangdata.service';
@Component({
  selector: 'roadm-app-xinjiang',
  templateUrl: './xinjiang.component.html',
  styleUrls: ['./xinjiang.component.css']
})
export class XinjiangComponent implements OnInit {
    public pic3 = "https://pic4.zhimg.com/80/v2-207e1cf40966e6f3f18fd6558015de3f_720w.jpg";
    public svg:any;
//     public dataset = [50,44,120,88,99,167,142];
    public height =1600;
    public width = 1600;
//     public padding = {top:20, left:20, right:20, bottom:20};
//     public rectStep = 35;
//     public rectWidth = 30;
    public nodes:any;
    public simulationNode:any;
    public links:any;
    public simulationLink:any;
    public simulationText:any;
    public simulation:any;
    public nodes_num:number;
    public links_num:number;

    constructor(public xinjiang:XinjiangdataService){
                this.nodes=this.xinjiang.nodes;
                console.log(this.nodes);
                this.links=this.xinjiang.links;
                console.log(this.links);
                this.nodes_num=this.nodes.length;
                this.links_num=this.links.length;
                console.log(this.nodes_num);
                console.log(this.links_num);
    }

    ngOnInit() {
        }
   ngAfterViewInit(){
         this.svg=d3.select("#mainsvg").append("svg")
//             .attr("height",this.height).attr("width",this.width).attr('class','insvg');
         let xixixi=this.svg;
         this.simulation=d3.forceSimulation(this.nodes)
                             .force('charge',d3.forceManyBody())
                             .force('link',d3.forceLink(this.links))
                             .force('center',d3.forceCenter(800,800))

         this.simulation.alphaDecay(0.05);
         this.simulation.force('charge')
                             .strength(-100);
         this.simulation.force('link')
                             .id(d => d.id)
                             .distance(100)
                             .strength(0.1)
                             .iterations(1);
         let hahaha=this.simulation;
         this.svg.call(d3.zoom()
                                .scaleExtent([0.1, 10])
                                .on('start', () => { // zoom 事件发生前 将变小手

                                   xixixi.style('cursor', 'pointer')
                                })
                                .on('zoom', () => {

                                   xixixi.attr('transform',
                                      d3.event.transform)
                               })
                               .on('end', () => {
                                   xixixi.style('cursor', 'default')
                               })
                               );
         this.simulationLink=this.svg.selectAll('line').data(this.links).enter().append('line').attr('stroke','black').attr('opacity',0.8).attr('stroke-width',0.5);
         this.simulationNode=this.svg.selectAll('circle').data(this.nodes).enter().append('circle').attr('r',8).attr('fill',d => d.color).call(d3.drag().on('start',function(d){
                                                                                                                                                                             if(!d3.event.active){
                                                                                                                                                                                hahaha.alphaTarget(.2).restart();
                                                                                                                                                                             }
                                                                                                                                                                             d.fx=d.x;
                                                                                                                                                                             d.fy=d.y;
                                                                                                                                                                         })
                                                                                                                                                  .on('drag',function(d){
                                                                                                                                                                            d.fx=d3.event.x;
                                                                                                                                                                            d.fy=d3.event.y;
                                                                                                                                                                       })
                                                                                                                                                  .on('end',function(d){
                                                                                                                                                                            if(!d3.event.active){
                                                                                                                                                                                hahaha.alphaTarget(0);

                                                                                                                                                                            }
                                                                                                                                                                            d.fx=null;
                                                                                                                                                                            d.fy=null;
                                                                                                                                                                       })
                                                                                                                      );
         this.simulationText=this.svg.selectAll('text').data(this.nodes).enter().append('text').attr("text-anchor", "middle").text(d => d.ID).attr("dy", "25px");
         let LINKS=this.simulationLink;
         let NODES=this.simulationNode;
         let TEXTS=this.simulationText;

                  let p1=document.createElement('p');
                  let p2=document.createElement('p');
                  let p3=document.createElement('p');
                  let p4=document.createElement('p');
                  let p5=document.createElement('p');
                  let p6=document.createElement('p');
                  let p7=document.createElement('p');
                  let p8=document.createElement('p');
                  let p9=document.createElement('p');
                  let p10=document.createElement('p');
                  let p11=document.createElement('p');
                  let p12=document.createElement('p');
                  let p13=document.createElement('p');
                  let p14=document.createElement('p');
                  let p15=document.createElement('p');

                  NODES.on('click',function(d){
                  p1.innerHTML="Name:"+d.name;
                  p2.innerHTML="Type:"+d.type;
                  p3.innerHTML="IP:"+d.ip;
                  p4.innerHTML="Software version:"+d.software_version;
                  p5.innerHTML="ID:"+d.ID;
                  p6.innerHTML="Number of fibers:"+d.fiber_num;
                  p7.innerHTML="Subnet:"+d.subnet;
                  p8.innerHTML="Subnet path:"+d.subnet_path;
                  p9.innerHTML="Subrack:"+d.subrack;
                  p10.innerHTML="Status of communication:"+d.communication_status;
                  p11.innerHTML="Status of management:"+d.manage_status;
                  p12.innerHTML="Time of creating:"+d.creat_time;
                  p13.innerHTML="Gateway type:"+d.gateway_type;
                  p14.innerHTML="Gateway:"+d.gateway;
                  p15.innerHTML="Gateway IP:"+d.gateway_IP;
                  });

                  document.getElementById('nodes').appendChild(p1);
                  document.getElementById('nodes').appendChild(p2);
                  document.getElementById('nodes').appendChild(p3);
                  document.getElementById('nodes').appendChild(p4);
                  document.getElementById('nodes').appendChild(p5);
                  document.getElementById('nodes').appendChild(p6);
                  document.getElementById('nodes').appendChild(p7);
                  document.getElementById('nodes').appendChild(p8);
                  document.getElementById('nodes').appendChild(p9);
                  document.getElementById('nodes').appendChild(p10);
                  document.getElementById('nodes').appendChild(p11);
                  document.getElementById('nodes').appendChild(p12);
                  document.getElementById('nodes').appendChild(p13);
                  document.getElementById('nodes').appendChild(p14);
                  document.getElementById('nodes').appendChild(p15);

                  let q1=document.createElement('p');
                  let q2=document.createElement('p');
                  let q3=document.createElement('p');
                  let q4=document.createElement('p');
                  let q5=document.createElement('p');
                  let q6=document.createElement('p');
                  let q7=document.createElement('p');
                  let q8=document.createElement('p');
                  LINKS.on("mouseover",function(d){
                  d3.select(this).attr('stroke','gray').attr('stroke-width',2);
                  })
                       .on("mouseout",function(d){
                                 d3.select(this).attr('stroke','black').attr('opacity',0.8).attr('stroke-width',0.5);
                                 })
                       .on('click',function(d){
                                q1.innerHTML="Name:"+d.name;
                                q2.innerHTML="Capacity:"+d.capacity;
                                q3.innerHTML="Orientation:"+d.orientation;
                                q4.innerHTML="Source NE:"+d.source_NE;
                                q5.innerHTML="Source port:"+d.source_port;
                                q6.innerHTML="Target NE:"+d.target_NE;
                                q7.innerHTML="Target port:"+d.target_port;
                                q8.innerHTML="Rank:"+d.rank;

                       });
                  document.getElementById('links').appendChild(q1);
                  document.getElementById('links').appendChild(q2);
                  document.getElementById('links').appendChild(q3);
                  document.getElementById('links').appendChild(q4);
                  document.getElementById('links').appendChild(q5);
                  document.getElementById('links').appendChild(q6);
                  document.getElementById('links').appendChild(q7);
                  document.getElementById('links').appendChild(q8);
         this.simulation.on('tick',function(){
                 LINKS.attr('x1',d => d.source.x).attr('y1',d => d.source.y).attr('x2',d => d.target.x).attr('y2',d => d.target.y);
                 NODES.attr('cx', d => d.x).attr('cy', d => d.y);
                  TEXTS.attr('x',d => d.x).attr('y',d => d.y);
         });

//        this.svg.selectAll("rect").data(this.dataset).enter().append("rect").attr("fill","red").attr('x',(d,i)=>this.padding.left+i*this.rectStep).attr('y',(d,i)=>this.height-this.padding.bottom-d).attr("width",this.rectWidth).attr("height",d=>d);
    }
}
