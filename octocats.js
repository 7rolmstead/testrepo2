//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function octocat(n,a){
  this.name = n;
  this.arms = a;
  function slap(){
    for(var s=0;s<a;s++){
      console.log("SLAP")
      return
    }
  }
}











//Write your 3 new octocat objects below here.
var mytoctocat = new octocat (Kuroka,69)
var momsoctocat = new octocat (Blake,4)
var dadsoctocat = new octocat (Felix,9)
