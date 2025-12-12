import { Transaction } from "@mysten/sui/transactions";

export const changePrice = (packageId: string, listHeroId: string, newPriceInSui: string, adminCapId: string) => {
  const tx = new Transaction();
  
  // Convert SUI to MIST
  const newPriceInMist = Number(newPriceInSui) * 1_000_000_000;
  // moveCall to change hero price (Admin only)
  tx.moveCall({
    target:`${packageId}::marketplace::change_the_price`,
    arguments:[
      tx.object(adminCapId),
      tx.object(listHeroId),
      tx.pure.u64(BigInt(newPriceInMist)),
    ]
  });
  return tx;
};
