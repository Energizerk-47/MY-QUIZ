class Contestant {
    constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
    }
   
    getCount(){
      var contestantCountRef = database.ref('playerCount');
      contestantCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
   
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
   
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
   
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
   
  