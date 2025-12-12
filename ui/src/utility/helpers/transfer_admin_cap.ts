import { Transaction } from "@mysten/sui/transactions";

export const transferAdminCap = (adminCapId: string, to: string) => {
  const tx = new Transaction();
  
  // Transfer admin capability to another address using transferObjects method
  tx.transferObjects([tx.object(adminCapId)], tx.pure.address(to));

  return tx;
};
