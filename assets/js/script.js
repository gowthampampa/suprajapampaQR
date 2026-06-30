
const ctx=document.getElementById('chart');
new Chart(ctx,{
type:'bar',
data:{
labels:['Jan','Feb','Mar','Apr'],
datasets:[{label:'Patients',data:[20,35,45,50]}]
},
options:{responsive:true}
});
