import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roadm-app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.css']
})
export class AuxiliaryComponent implements OnInit {
      public pic3 = "https://pic4.zhimg.com/80/v2-207e1cf40966e6f3f18fd6558015de3f_720w.jpg";
  public WSS_status:any[]=[
    {
        title:'OSN1',
        checked:false
    },
    {
        title:'OSN2',
        checked:false
    },
    {
        title:'OSN3',
        checked:false
    },
    {
        title:'OSN4',
        checked:false
    }
  ];
  public wss1:boolean=false;
  public wss2:boolean=false;
  public wss3:boolean=false;
  public wss4:boolean=false;
  public path1:boolean=false;
  public path2:boolean=false;
  public path11:boolean=false;
  public path22:boolean=false;
  public line1:boolean=false;
  public line2:boolean=false;
  public line3:boolean=false;
  public line4:boolean=false;
  constructor() {

   }
   submit1(){
        if(this.wss1&&this.wss2&&this.wss3){
           this.path1=true;
        }
        if(this.wss1&&this.wss3&&this.wss4){
           this.path2=true;
        }
   }
   path_fin(){
        if(this.path1){
            setTimeout(() => {this.path11=true;},2000);
        }
        if(this.path2){
            setTimeout(() => {this.path22=true;},2000);
        }
   }
    submit(){
        this.wss1=this.WSS_status[0].checked;
        this.wss2=this.WSS_status[1].checked;
        this.wss3=this.WSS_status[2].checked;
        this.wss4=this.WSS_status[3].checked;
        this.submit1();
        this.path_fin();
        console.log(this.WSS_status);
           console.log(this.wss1);
           console.log(this.wss2);
           console.log(this.wss3);
           console.log(this.wss4);
           console.log(this.path1);
           console.log(this.path2);

    }
    clear(){
    this.wss1=false;
    this.wss2=false;
    this.wss3=false;
    this.wss4=false;
    this.path1=false;
    this.path2=false;
    this.path11=false;
    this.path22=false;
    }
    over1(){
        this.line1=true;
    }
    leave1(){
        this.line1=false;
    }
    over2(){
        this.line2=true;
    }
    leave2(){
        this.line2=false;
    }
    over3(){
        this.line3=true;
    }
    leave3(){
        this.line3=false;
    }
    over4(){
        this.line4=true;
    }
    leave4(){
        this.line4=false;
    }
  ngOnInit() {
  }

}
