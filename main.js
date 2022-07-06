// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => {
      return {
          specimenNumber: specimenNum,
          dna: dna,
          mutate(returnRandBase) {
  
  
              switch (returnRandBase) {
                  case 'A':
                      const randomPick = ['T', 'C', 'G']
                      return randomPick[Math.floor(Math.random() * 3)];
                      break;
                  case 'T':
                      const randomPick2 = ['A', 'C', 'G']
                      return randomPick2[Math.floor(Math.random() * 3)];
                      break;
                  case 'C':
                      const randomPick3 = ['T', 'A', 'G']
                      return randomPick3[Math.floor(Math.random() * 3)];
                      break;
                  case 'G':
                      const randomPick4 = ['T', 'C', 'A']
                      return randomPick4[Math.floor(Math.random() * 3)];
              }
  
  
  
          },
          compareDNA(pAequor) {
              let counter = 0;
              for (let i = 0; i < pAequor.length; i++) {
  
  
                  if (pAequor[i] === this.dna[i]) counter++;
  
  
  
              }
  
              const percentage = Math.round(counter / 15 * 100)
              console.log(`specimen #1 and specimen #2 have ${percentage}% DNA in common`);
          },
          willLikelySurvive() {
              let max = 0;
              for (let i = 0; i < this.dna.length; i++) {
  
                  if (this.dna[i] === 'C' || this.dna[i] === 'G') max++
  
  
              }
              const percentage = Math.round(max / this.dna.length * 100);
  
              return percentage >= 60 ? true : false;
  
          }
  
      }
  }
  
  const highRateOfSurvival = [];
  for (let i = 1; i <= 30; i++) {
      let temp = pAequorFactory(i, mockUpStrand());
      if (temp.willLikelySurvive() === true) {
          highRateOfSurvival.push(temp);
      }
  
  }
  console.log(highRateOfSurvival)
  
  