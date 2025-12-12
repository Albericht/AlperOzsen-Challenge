import { Transaction } from "@mysten/sui/transactions";

export const battle = (packageId: string, heroId: string, arenaId: string) => {
  const tx = new Transaction();
  
  // moveCall to start a battle (winner handled in contract)
  tx.moveCall({
    target:`${packageId}::arena::battle`,
    arguments:[
      tx.object(heroId),
      tx.object(arenaId),
    ]
  });
  return tx;
};
