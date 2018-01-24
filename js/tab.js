// 构造函数
class Tab {
    constructor() {
     this.lis = document.querySelectorAll( ".list li" );
     this.divs = document.querySelectorAll( ".main div" );
     this.init();
    }
    // 实例方法
    init () {
        this.bindEvent();
    }
    bindEvent(){
     let id = null;
     // 进行便利并且给给一个li添加事件
     this.lis.forEach(( ele, index ) => {
         console.log(ele);
      ele.addEventListener( "click", () => {
       id = ele.dataset.target;
       console.log(id)
       this.switchTab( ele, id );
      });
     });
    }
    // 进行循环便利
    switchTab( lis, ID) {
     let oDiv = document.querySelector(ID);
     this.divs.forEach(( ele, index ) => {
      ele.style.display = 'none';
      this.lis[index].className = '';
     });
     lis.className = 'bg';
     oDiv.style.display = 'block';
    }
   }
   // 实例化
   new Tab();
