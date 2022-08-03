import { Component, OnInit,Injectable } from '@angular/core';
import { StorageService } from '../../../roadm/services/storage.service';

@Component({
  selector: 'roadm-app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class TopologyComponent implements OnInit {
  public pic3 = "https://pic4.zhimg.com/80/v2-207e1cf40966e6f3f18fd6558015de3f_720w.jpg";
  public switch:boolean=false;
  public NElist:any[]=["NE1","NE2","NE3","NE4","NE5","NE6","NE7","NE8","NE9","NE10",];
  public topoPanel:any={
    SNE:"",
    DNE:"",
    BW:""
  }
  public sev:any={
    sne:"",
    dne:"",
    bw:"",
    CT:new Date,
    xh:0
  }

  public sevlist:any[]=[];


  public sl1:boolean=false;
  public xs1:boolean=false;
  public sl2:boolean=false;
  public xs2:boolean=false;
  public sl3:boolean=false;
  public xs3:boolean=false;

  xianshi1(){
       this.xs1=true;
       this.sl1=false;
  }
  suanlu1(){
       this.sl1=true;
       this.xs1=false;
       setTimeout(() => {this.xianshi1();},2000);
  }
   xianshi2(){
     this.xs2=true;
     this.sl2=false;
   }
   suanlu2(){
     this.sl2=true;
     this.xs2=false;
     setTimeout(() => {this.xianshi2();},2000);
   }
   xianshi3(){
      this.xs3=true;
      this.sl3=false;
   }
   suanlu3(){
      this.sl3=true;
      this.xs3=false;
      setTimeout(() => {this.xianshi3();},2000);
   }

  sevpush(){
    this.sevlist.push(JSON.parse(JSON.stringify(this.sev)));
    this.storage.set('sevlist',this.sevlist);//装入服务
//     window.location.reload();

  }
  aa(){
    console.log(this.sevlist);
    console.log(this.sev);
    console.log(this.topoPanel);
  }
  sub(){
    this.sev.sne=this.topoPanel.SNE;
    this.sev.dne=this.topoPanel.DNE;
    this.sev.bw=this.topoPanel.BW;
    this.sev.CT=new Date;
    this.sev.xh+=1;
    this.storage.set('sev',this.sev);
    this.sevpush();
  }
  show(){
    this.switch=true;
  }
  vanish(){
    this.switch=false;
  }
  initialize(){
    this.sevlist=[];
    this.sev={
                sne:"",
                dne:"",
                bw:"",
                CT:new Date,
                xh:0
              };
    this.storage.set('sevlist',this.sevlist);
    this.storage.set('sev',this.sev);
//     window.location.reload();
  }
  constructor(public storage:StorageService) { }

  ngOnInit() {
    let list1=this.storage.get('sevlist')//导出服务
    if(list1){
      this.sevlist=list1;
    }
    let obj1=this.storage.get('sev')//导出服务
    if(obj1){
      this.sev=obj1;
    }
  }

}
