const flagEl = document.getElementById("flag");

const rows = 45;
const columns = 70;

const generateUnit = (columnNum,j) => {
  const flagUnit = document.createElement("div");
  flagUnit.classList.add("flag-unit");
  flagUnit.style.setProperty("animation-delay", `${columnNum * 13}ms`);
  flagUnit.style.setProperty("--displacement", `${columnNum / 7}px`);
  
  if(j<=15){
    flagUnit.style.backgroundColor="#FF9933";
    flagUnit.style.boxShadow="0px 0px 1px 1px #FF9933";
  }
  else if(j>=30 && j<=45){
    flagUnit.style.backgroundColor="#138808";
    flagUnit.style.boxShadow="0px 0px 1px 1px #138808";
  }
  else{
    flagUnit.style.boxShadow="0px 0px 1px 1px #FFF";
  }
  
  if(j>17 && j<27){
    if(columnNum>=31 && columnNum<=39){
        if(columnNum!=31 && j!=18 || columnNum !=39 && j!=26){
            flagUnit.style.backgroundColor="#000080";
            flagUnit.style.borderRadius="50%";
        }
        
    }
  }
  
  
  const column = document.getElementById(`column-${columnNum}`);

  column.innerHTML += flagUnit.outerHTML;
};

for (let i = 0; i < columns; i++) {
  flagEl.innerHTML += `<div class="column" id="column-${i}"></div>`;
  for (let j = 0; j < rows; j++) {
    generateUnit(i,j);
  }
}

function hello(){
    const song=new Audio('./india.mp3');
    song.play();
    const flag=document.getElementById('flag');
    const parts=document.querySelectorAll('.flag-unit');

    if(flag.classList.contains('hoist')){
        window.location.reload();
    }
    
    flag.classList.add("hoist");

    setTimeout(()=>{
        flag.style.width="unset";
        flag.style.overflow="unset";

        parts.forEach((el)=>{
            el.classList.add("wave");
        });

        document.querySelector('button').innerText="Refresh";

    },4700);

}
