let count=0;

function update_count(){
  document.getElementById('count').textContent=count;
}

function increment(){
  count++;
  update_count();
}

function Decrement(){
  count--;
  update_count();
}

function Reset(){
  count=0;
  update_count();
}

function Save(){
  localStorage.setItem("count",count);
}

function Load_from_save(){
  let saved = localStorage.getItem("count");
  if(saved!=null){
    count=Number(saved);
  }
  update_count();
}