import { Transaction } from "@mysten/sui/transactions";

export const listHero = (
  packageId: string,
  heroId: string,
  priceInSui: string,
) => {
  const tx = new Transaction();

  // Convert SUI to MIST
  const priceInMist = Number(priceInSui) * 1_000_000_000;
  
  // moveCall to list a hero for sale from marketplace module and mist converted
  tx.moveCall({
    target: `${packageId}::marketplace::list_hero`,
    arguments:[
      tx.object(heroId),
      tx.pure.u64(priceInMist)
    ]
  });
  return tx;
};
