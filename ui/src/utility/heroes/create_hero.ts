import { Transaction } from "@mysten/sui/transactions";

export const createHero = (
  packageId: string,
  name: string,
  imageUrl: string,
  power: string,
) => {
  const tx = new Transaction();

  // moveCall to create a hero but with arena module instead of hero and power is BigInt
    tx.moveCall({
    target: `${packageId}::hero::create_hero`,
    arguments:[
      tx.pure.string(name),
      tx.pure.string(imageUrl),
      tx.pure.u64(BigInt(power))
    ]
  });
  
  return tx;
};