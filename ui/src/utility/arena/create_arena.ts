import { Transaction } from "@mysten/sui/transactions";

export const createArena = (packageId: string, heroId: string) => {
  const tx = new Transaction();
  
  // Add moveCall to create a shared battle place
  tx.moveCall({
    target:`${packageId}::arena::create_arena`,
    arguments:[
      tx.object(heroId),
    ]
  });
  return tx;
};
