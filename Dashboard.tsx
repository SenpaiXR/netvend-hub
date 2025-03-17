import { useWallet } from '@solana/wallet-adapter-react';
import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

const NVCH_MINT = new PublicKey('FycyqqhDyJPnpmkwVndwD6JyXPMLEFxqmYxCEhESA6SC');

export default function Dashboard() {
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!publicKey) return;
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
    connection.getParsedTokenAccountsByOwner(publicKey, { mint: NVCH_MINT }).then((res) => {
      if (res.value.length > 0) {
        setBalance(res.value[0].account.data.parsed.info.tokenAmount.uiAmount);
      } else {
        setBalance(0);
      }
    });
  }, [publicKey]);

  return (
    <div>
      {publicKey ? (
        <p>Your NVCH Balance: {balance !== null ? balance : 'Loading...'}</p>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
}