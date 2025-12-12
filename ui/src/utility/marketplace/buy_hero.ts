import { Transaction } from "@mysten/sui/transactions";

export const buyHero = (packageId: string, listHeroId: string, priceInSui: string) => {
  const tx = new Transaction();
  
  // Convert SUI to MIST
  const priceInMist = Number(priceInSui) * 1_000_000_000;
  // Split coin for exact payment
  const [paymentCoin] = tx.splitCoins(tx.gas,[priceInMist]);
  // moveCall to buy a hero from marketplace module and split coin
  tx.moveCall({
    target:`${packageId}::marketplace::buy_hero`,
    arguments:[
      tx.object(listHeroId),
      paymentCoin
    ]
  });
  return tx;
};
