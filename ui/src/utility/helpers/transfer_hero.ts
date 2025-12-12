import { Transaction } from "@mysten/sui/transactions";

export const transferHero = (heroId: string, to: string) => {
  const tx = new Transaction();
  
  // Transfer hero to another address using transferObjects method
  tx.transferObjects([tx.object(heroId)], tx.pure.address(to));
  
  return tx;
};